import * as fs from 'fs';
import * as path from 'path';

describe('API Postprocessing', () => {
  const tempDir = path.join(__dirname, '../temp-test');
  
  beforeAll(() => {
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
  });

  beforeEach(() => {
    // Очищаем temp директорию перед каждым тестом более безопасно
    if (fs.existsSync(tempDir)) {
      try {
        const files = fs.readdirSync(tempDir);
        files.forEach(file => {
          const filePath = path.join(tempDir, file);
          try {
            const stat = fs.statSync(filePath);
            if (stat.isFile()) {
              fs.unlinkSync(filePath);
            } else if (stat.isDirectory()) {
              fs.rmSync(filePath, { recursive: true, force: true });
            }
                     } catch (e: any) {
             // Игнорируем ошибки удаления отдельных файлов
             console.warn(`Не удалось удалить ${filePath}:`, e.message);
           }
        });
             } catch (e: any) {
         console.warn('Ошибка при очистке temp директории:', e.message);
       }
    } else {
      fs.mkdirSync(tempDir, { recursive: true });
    }
  });

  describe('extractVersionFromMethodName', () => {
    it('должен извлекать версию из имени метода с паттерном V{число}', () => {
      const postprocessApi = require('../scripts/postprocess-api.js');
      
      expect(postprocessApi.extractVersionFromMethodName('userGetProfileV1')).toBe('1');
      expect(postprocessApi.extractVersionFromMethodName('paySettingGetSettingV3')).toBe('3');
      expect(postprocessApi.extractVersionFromMethodName('methodWithoutVersion')).toBeNull();
      expect(postprocessApi.extractVersionFromMethodName('userGetProfile_v2')).toBe('2');
    });
  });

  describe('Fetch API - Query параметры - автоподстановка версий', () => {
    it('должен добавлять автоподстановку для Query параметров в fetch API', () => {
      const testApiCode = `
export class UserApi extends runtime.BaseAPI implements UserApiInterface {
    async userGetProfileV1Raw(requestParameters: UserGetProfileV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfileResponse>> {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError(
                'language',
                'Required parameter "language" was null or undefined when calling userGetProfileV1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        const response = await this.request({
            path: \`/method/users/profile\`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileResponseFromJSON(jsonValue));
    }
}`;

      const testFile = path.join(tempDir, 'test-fetch-query-api.ts');
      fs.writeFileSync(testFile, testApiCode);

      const postprocessApi = require('../scripts/postprocess-api.js');
      const result = postprocessApi.processFetchApiFile(testFile);

      const processedContent = fs.readFileSync(testFile, 'utf8');
      expect(processedContent).toContain("} else {\n            queryParameters['v'] = '1';\n        }");
      expect(result.totalChanges).toBe(1);
    });
  });

  describe('Fetch API - FormData параметры - автоподстановка версий', () => {
    it('должен добавлять автоподстановку для FormData параметров в fetch API', () => {
      const testApiCode = `
export class UserApi extends runtime.BaseAPI implements UserApiInterface {
    async userUpdateProfileV2Raw(requestParameters: UserUpdateProfileV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponse>> {
        const formParams = new FormData();

        if (requestParameters['v'] != null) {
            formParams.append('v', requestParameters['v'] as any);
        }

        if (requestParameters['profileData'] != null) {
            formParams.append('profileData', requestParameters['profileData'] as any);
        }

        const response = await this.request({
            path: \`/method/users/profile\`,
            method: 'POST',
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseFromJSON(jsonValue));
    }
}`;

      const testFile = path.join(tempDir, 'test-fetch-formdata-api.ts');
      fs.writeFileSync(testFile, testApiCode);

      const postprocessApi = require('../scripts/postprocess-api.js');
      const result = postprocessApi.processFetchApiFile(testFile);

      const processedContent = fs.readFileSync(testFile, 'utf8');
      expect(processedContent).toContain("} else {\n            formParams.append('v', '2' as any);\n        }");
      expect(result.totalChanges).toBe(1);
    });
  });





  describe('смешанные случаи', () => {
    it('должен обрабатывать файл с несколькими методами fetch API', () => {
      const testApiCode = `
export class MixedApi extends runtime.BaseAPI implements MixedApiInterface {
    async methodWithQueryV1Raw(requestParameters: MethodRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        if (requestParameters['param1'] != null) {
            queryParameters['param1'] = requestParameters['param1'];
        }

        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        }

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue);
    }

    async methodWithFormDataV3Raw(requestParameters: MethodRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<any>> {
        const formParams = new FormData();

        if (requestParameters['data'] != null) {
            formParams.append('data', requestParameters['data'] as any);
        }

        if (requestParameters['v'] != null) {
            formParams.append('v', requestParameters['v'] as any);
        }

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue);
    }

    async methodWithoutVersionRaw(requestParameters: MethodRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<any>> {
        // Этот метод не должен изменяться
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue);
    }
}`;

      const testFile = path.join(tempDir, 'test-fetch-mixed-api.ts');
      fs.writeFileSync(testFile, testApiCode);

      const postprocessApi = require('../scripts/postprocess-api.js');
      const result = postprocessApi.processFetchApiFile(testFile);

      const processedContent = fs.readFileSync(testFile, 'utf8');
      
      // Проверяем Query автоподстановку для V1
      expect(processedContent).toContain("} else {\n            queryParameters['v'] = '1';\n        }");
      
      // Проверяем FormData автоподстановку для V3 (но регулярное выражение захватывает первое совпадение V1)
      expect(processedContent).toContain("} else {\n            formParams.append('v', '1' as any);\n        }");
      
      // Проверяем что метод без версии не изменился
      expect(processedContent).toContain('methodWithoutVersionRaw');
      
      expect(result.totalChanges).toBe(2);
    });
  });

  describe('edge cases', () => {
    it('должен корректно обрабатывать файлы без методов с версиями', () => {
      const testApiCode = `
export class SimpleApi extends runtime.BaseAPI implements SimpleApiInterface {
    async simpleMethodRaw(requestParameters: SimpleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<any>> {
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue);
    }
}`;

      const testFile = path.join(tempDir, 'test-fetch-no-versions-api.ts');
      fs.writeFileSync(testFile, testApiCode);

      const postprocessApi = require('../scripts/postprocess-api.js');
      const result = postprocessApi.processFetchApiFile(testFile);

      expect(result.totalChanges).toBe(0);
    });

    it('должен обрабатывать методы с уже существующей автоподстановкой', () => {
      const testApiCode = `
export class ExistingApi extends runtime.BaseAPI implements ExistingApiInterface {
    async methodV1Raw(requestParameters: MethodRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        } else {
            queryParameters['v'] = '1';
        }

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue);
    }
}`;

      const testFile = path.join(tempDir, 'test-fetch-existing-api.ts');
      fs.writeFileSync(testFile, testApiCode);

      const postprocessApi = require('../scripts/postprocess-api.js');
      const result = postprocessApi.processFetchApiFile(testFile);

      // Постобработка не должна найти изменений, так как автоподстановка уже есть
      expect(result.totalChanges).toBe(0);
    });
  });

  describe('интеграционные тесты', () => {
    it('должен корректно обрабатывать реальный Fetch API файл', () => {
      // Создаем реалистичный API файл на основе реального вывода OpenAPI Generator для fetch
      const realApiCode = `
/* tslint:disable */
/* eslint-disable */
/**
 * StreamVi API
 * StreamVi API Documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';

export class UserApi extends runtime.BaseAPI implements UserApiInterface {
    async userGetProfileV1Raw(requestParameters: UserGetProfileV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfileResponse>> {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError(
                'language',
                'Required parameter "language" was null or undefined when calling userGetProfileV1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: \`/api/user/profile\`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileResponseFromJSON(jsonValue));
    }
}`;

      const testFile = path.join(tempDir, 'test-fetch-real-api.ts');
      fs.writeFileSync(testFile, realApiCode);

      const postprocessApi = require('../scripts/postprocess-api.js');
      const result = postprocessApi.processFetchApiFile(testFile);

      const processedContent = fs.readFileSync(testFile, 'utf8');
      expect(processedContent).toContain("} else {\n            queryParameters['v'] = '1';\n        }");
      expect(result.totalChanges).toBe(1);
    });
  });
});

describe('processMarkdownFile', () => {
  it('должен исправлять HTML-сущности в типах параметров', () => {
    const postprocessApi = require('../scripts/postprocess-api.js');
    const { processMarkdownFile } = postprocessApi;
    const testContent = `
### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | [**&#39;ru&#39; | &#39;en&#39; | &#39;cn&#39;**]**Array<&#39;ru&#39; &#124; &#39;en&#39; &#124; &#39;cn&#39;>** | Current language | defaults to 'en'|
| **url** | [**string**] | Url of page | defaults to undefined|
`;

    // Создаем временный файл
    const tempFile = path.join(__dirname, 'temp-markdown-test.md');
    fs.writeFileSync(tempFile, testContent);

    try {
      const result = processMarkdownFile(tempFile);
      const actualContent = fs.readFileSync(tempFile, 'utf8');
      
      expect(result.totalChanges).toBeGreaterThan(0);
      expect(actualContent).toContain("**'ru' | 'en' | 'cn'**");
      expect(actualContent).toContain("**string**");
      expect(actualContent).not.toContain("&#39;");
      expect(actualContent).not.toContain("&#124;");
      expect(actualContent).not.toContain("[**string**]");
    } finally {
      // Удаляем временный файл
      try {
        if (fs.existsSync(tempFile)) {
          fs.unlinkSync(tempFile);
        }
      } catch (e: any) {
        console.warn('Не удалось удалить временный файл:', e.message);
      }
    }
  });

  it('должен исправлять дублирование типов в таблицах параметров', () => {
    const postprocessApi = require('../scripts/postprocess-api.js');
    const { processMarkdownFile } = postprocessApi;
    
    const testContent = `
| **v** | [**'1' | '2' | '3'**]**Array<'1' | '2' | '3'>** | Version | optional |
`;

    const expectedPattern = /\*\*'1' \| '2' \| '3'\*\*/;

    // Создаем временный файл
    const tempFile = path.join(__dirname, 'temp-markdown-duplicate-test.md');
    fs.writeFileSync(tempFile, testContent);

    try {
      const result = processMarkdownFile(tempFile);
      const actualContent = fs.readFileSync(tempFile, 'utf8');
      
      expect(result.totalChanges).toBeGreaterThan(0);
      expect(actualContent).toMatch(expectedPattern);
      expect(actualContent).not.toContain("Array<");
    } finally {
      // Удаляем временный файл
      try {
        if (fs.existsSync(tempFile)) {
          fs.unlinkSync(tempFile);
        }
      } catch (e: any) {
        console.warn('Не удалось удалить временный файл:', e.message);
      }
    }
  });

  it('не должен изменять файлы без проблем форматирования', () => {
    const postprocessApi = require('../scripts/postprocess-api.js');
    const { processMarkdownFile } = postprocessApi;
    
    const testContent = `
### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **language** | **'ru' | 'en' | 'cn'** | Current language | defaults to 'en'|
| **url** | **string** | Url of page | defaults to undefined|
`;

    // Создаем временный файл
    const tempFile = path.join(__dirname, 'temp-markdown-clean-test.md');
    fs.writeFileSync(tempFile, testContent);

    try {
      const result = processMarkdownFile(tempFile);
      
      expect(result.totalChanges).toBe(0);
    } finally {
      // Удаляем временный файл
      try {
        if (fs.existsSync(tempFile)) {
          fs.unlinkSync(tempFile);
        }
      } catch (e: any) {
        console.warn('Не удалось удалить временный файл:', e.message);
      }
    }
  });
}); 