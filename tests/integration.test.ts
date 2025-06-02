import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

describe('SDK Generation Integration Tests', () => {
  const tempDir = path.join(__dirname, '../temp-test');
  const testApiDir = path.join(tempDir, 'api');
  
  beforeAll(() => {
    try {
      // Создаем директории синхронно и проверяем их создание
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }
      if (!fs.existsSync(testApiDir)) {
        fs.mkdirSync(testApiDir, { recursive: true });
      }
      
      // Дополнительная проверка что директории созданы
      if (!fs.existsSync(tempDir)) {
        throw new Error(`Не удалось создать директорию: ${tempDir}`);
      }
      if (!fs.existsSync(testApiDir)) {
        throw new Error(`Не удалось создать директорию: ${testApiDir}`);
      }
    } catch (e: any) {
      console.error('Ошибка при создании директорий:', e.message);
      throw e;
    }
  });

  afterAll(() => {
    // Очищаем временные файлы более безопасно
    try {
      if (fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, { recursive: true, force: true });
      }
          } catch (e: any) {
        console.warn('Ошибка при очистке временных файлов:', e.message);
      }
  });





  describe('регрессионные тесты', () => {
    it.skip('должен корректно обрабатывать сложные случаи из реального API', () => {
      // Тест на основе реальных проблем, которые могли возникнуть
      const complexSpec = {
        openapi: '3.0.0',
        info: { title: 'Complex API', version: '1.0.0' },
        paths: {
          '/api/complex': {
            post: {
              operationId: 'SiteComplexControllerMethodWithLongName[3]V2',
              parameters: [
                {
                  name: 'v',
                  in: 'query',
                  required: true,
                  schema: { type: 'string', example: 'wrong_version' }
                }
              ]
            }
          }
        }
      };

      try {
        // Убеждаемся что директория существует
        if (!fs.existsSync(tempDir)) {
          fs.mkdirSync(tempDir, { recursive: true });
        }
        
        const specFile = path.join(tempDir, 'complex-spec.json');
        fs.writeFileSync(specFile, JSON.stringify(complexSpec, null, 2));

        const cleanOpenApiSpec = require('../scripts/clean-openapi-spec.js');
        const result = cleanOpenApiSpec.processSpec(specFile);

        // Проверяем что сложное имя обработано правильно
        expect(result.paths['/api/complex'].post.operationId).toBe('SiteComplexControllerMethodWithLongName[3]V2');
        
        // Проверяем что версия по умолчанию установлена правильно
        const vParam = result.paths['/api/complex'].post.parameters.find((p: any) => p.name === 'v');
        expect(vParam.schema.default).toBe('2');
        expect(vParam.required).toBe(false); // Должен стать опциональным
              } catch (e: any) {
          console.error('Ошибка в регрессионном тесте:', e.message);
          throw e;
        }
    });
  });
}); 