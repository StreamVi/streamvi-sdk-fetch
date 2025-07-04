/* tslint:disable */
/* eslint-disable */
/**
 * StreamVi Backend
 * API
 *
 * The version of the OpenAPI document: 3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  ListOfUserProject2ProjectResponse,
  PaginatedResponseOfUserProjectResponse,
  ProjectInfoResponse,
  SuccessResponse,
  UserProjectGetResponse,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ListOfUserProject2ProjectResponseFromJSON,
    ListOfUserProject2ProjectResponseToJSON,
    PaginatedResponseOfUserProjectResponseFromJSON,
    PaginatedResponseOfUserProjectResponseToJSON,
    ProjectInfoResponseFromJSON,
    ProjectInfoResponseToJSON,
    SuccessResponseFromJSON,
    SuccessResponseToJSON,
    UserProjectGetResponseFromJSON,
    UserProjectGetResponseToJSON,
} from '../models/index';

export interface UserProjectChangeAccessV1Request {
    language: UserProjectChangeAccessV1LanguageEnum;
    project_id: number;
    user_id: number;
    access_type: UserProjectChangeAccessV1AccessTypeEnum;
    v?: UserProjectChangeAccessV1VEnum;
}

export interface UserProjectDelV1Request {
    language: UserProjectDelV1LanguageEnum;
    project_id: number;
    user_id: number;
    v?: UserProjectDelV1VEnum;
}

export interface UserProjectGetProjectInfoV1Request {
    language: UserProjectGetProjectInfoV1LanguageEnum;
    project_id: number;
    v?: UserProjectGetProjectInfoV1VEnum;
}

export interface UserProjectGetProjectV1Request {
    language: UserProjectGetProjectV1LanguageEnum;
    project_external_id: string;
    v?: UserProjectGetProjectV1VEnum;
}

export interface UserProjectGetUserV1Request {
    language: UserProjectGetUserV1LanguageEnum;
    user_external_id: string;
    v?: UserProjectGetUserV1VEnum;
}

export interface UserProjectListAccessV1Request {
    language: UserProjectListAccessV1LanguageEnum;
    project_id: number;
    v?: UserProjectListAccessV1VEnum;
}

export interface UserProjectListV1Request {
    language: UserProjectListV1LanguageEnum;
    v?: UserProjectListV1VEnum;
    limit?: number;
    offset?: number;
}

export interface UserProjectSelectProjectV1Request {
    language: UserProjectSelectProjectV1LanguageEnum;
    id: number;
    v?: UserProjectSelectProjectV1VEnum;
}

/**
 * UserProjectApi - interface
 * 
 * @export
 * @interface UserProjectApiInterface
 */
export interface UserProjectApiInterface {
    /**
     * 
     * @summary Change access user from project
     * @param {'ru' | 'en' | 'cn'} language Current language
     * @param {number} project_id Project id
     * @param {number} user_id User id
     * @param {0 | 1 | 2} access_type Access type
     * @param {'1' | '2' | '3'} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserProjectApiInterface
     */
    userProjectChangeAccessV1Raw(requestParameters: UserProjectChangeAccessV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponse>>;

    /**
     * Change access user from project
     */
    userProjectChangeAccessV1(requestParameters: UserProjectChangeAccessV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponse>;

    /**
     * 
     * @summary Remove user from project
     * @param {'ru' | 'en' | 'cn'} language Current language
     * @param {number} project_id Project id
     * @param {number} user_id User id
     * @param {'1' | '2' | '3'} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserProjectApiInterface
     */
    userProjectDelV1Raw(requestParameters: UserProjectDelV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponse>>;

    /**
     * Remove user from project
     */
    userProjectDelV1(requestParameters: UserProjectDelV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponse>;

    /**
     * 
     * @summary Get project full info
     * @param {'ru' | 'en' | 'cn'} language Current language
     * @param {number} project_id Project id
     * @param {'1' | '2' | '3'} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserProjectApiInterface
     */
    userProjectGetProjectInfoV1Raw(requestParameters: UserProjectGetProjectInfoV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectInfoResponse>>;

    /**
     * Get project full info
     */
    userProjectGetProjectInfoV1(requestParameters: UserProjectGetProjectInfoV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectInfoResponse>;

    /**
     * 
     * @summary Get project by number id
     * @param {'ru' | 'en' | 'cn'} language Current language
     * @param {string} project_external_id Project external id
     * @param {'1' | '2' | '3'} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserProjectApiInterface
     */
    userProjectGetProjectV1Raw(requestParameters: UserProjectGetProjectV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProjectGetResponse>>;

    /**
     * Get project by number id
     */
    userProjectGetProjectV1(requestParameters: UserProjectGetProjectV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProjectGetResponse>;

    /**
     * 
     * @summary Get user by number id
     * @param {'ru' | 'en' | 'cn'} language Current language
     * @param {string} user_external_id User external id
     * @param {'1' | '2' | '3'} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserProjectApiInterface
     */
    userProjectGetUserV1Raw(requestParameters: UserProjectGetUserV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProjectGetResponse>>;

    /**
     * Get user by number id
     */
    userProjectGetUserV1(requestParameters: UserProjectGetUserV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProjectGetResponse>;

    /**
     * 
     * @summary List of user in project
     * @param {'ru' | 'en' | 'cn'} language Current language
     * @param {number} project_id Project id
     * @param {'1' | '2' | '3'} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserProjectApiInterface
     */
    userProjectListAccessV1Raw(requestParameters: UserProjectListAccessV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListOfUserProject2ProjectResponse>>;

    /**
     * List of user in project
     */
    userProjectListAccessV1(requestParameters: UserProjectListAccessV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListOfUserProject2ProjectResponse>;

    /**
     * 
     * @summary List of project for current user
     * @param {'ru' | 'en' | 'cn'} language Current language
     * @param {'1' | '2' | '3'} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {number} [limit] Number of results
     * @param {number} [offset] Page offset number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserProjectApiInterface
     */
    userProjectListV1Raw(requestParameters: UserProjectListV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedResponseOfUserProjectResponse>>;

    /**
     * List of project for current user
     */
    userProjectListV1(requestParameters: UserProjectListV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedResponseOfUserProjectResponse>;

    /**
     * 
     * @summary Select user for project
     * @param {'ru' | 'en' | 'cn'} language Current language
     * @param {number} id Project internal id
     * @param {'1' | '2' | '3'} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserProjectApiInterface
     */
    userProjectSelectProjectV1Raw(requestParameters: UserProjectSelectProjectV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProjectGetResponse>>;

    /**
     * Select user for project
     */
    userProjectSelectProjectV1(requestParameters: UserProjectSelectProjectV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProjectGetResponse>;

}

/**
 * 
 */
export class UserProjectApi extends runtime.BaseAPI implements UserProjectApiInterface {

    /**
     * Change access user from project
     */
    async userProjectChangeAccessV1Raw(requestParameters: UserProjectChangeAccessV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponse>> {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError(
                'language',
                'Required parameter "language" was null or undefined when calling userProjectChangeAccessV1().'
            );
        }

        if (requestParameters['project_id'] == null) {
            throw new runtime.RequiredError(
                'project_id',
                'Required parameter "project_id" was null or undefined when calling userProjectChangeAccessV1().'
            );
        }

        if (requestParameters['user_id'] == null) {
            throw new runtime.RequiredError(
                'user_id',
                'Required parameter "user_id" was null or undefined when calling userProjectChangeAccessV1().'
            );
        }

        if (requestParameters['access_type'] == null) {
            throw new runtime.RequiredError(
                'access_type',
                'Required parameter "access_type" was null or undefined when calling userProjectChangeAccessV1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        } else {
            queryParameters['v'] = '1';
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        if (requestParameters['project_id'] != null) {
            queryParameters['project_id'] = requestParameters['project_id'];
        }

        if (requestParameters['user_id'] != null) {
            queryParameters['user_id'] = requestParameters['user_id'];
        }

        if (requestParameters['access_type'] != null) {
            queryParameters['access_type'] = requestParameters['access_type'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/method/project/user/change_access`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseFromJSON(jsonValue));
    }

    /**
     * Change access user from project
     */
    async userProjectChangeAccessV1(requestParameters: UserProjectChangeAccessV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponse> {
        const response = await this.userProjectChangeAccessV1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove user from project
     */
    async userProjectDelV1Raw(requestParameters: UserProjectDelV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponse>> {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError(
                'language',
                'Required parameter "language" was null or undefined when calling userProjectDelV1().'
            );
        }

        if (requestParameters['project_id'] == null) {
            throw new runtime.RequiredError(
                'project_id',
                'Required parameter "project_id" was null or undefined when calling userProjectDelV1().'
            );
        }

        if (requestParameters['user_id'] == null) {
            throw new runtime.RequiredError(
                'user_id',
                'Required parameter "user_id" was null or undefined when calling userProjectDelV1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        } else {
            queryParameters['v'] = '1';
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        if (requestParameters['project_id'] != null) {
            queryParameters['project_id'] = requestParameters['project_id'];
        }

        if (requestParameters['user_id'] != null) {
            queryParameters['user_id'] = requestParameters['user_id'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/method/project/user/del`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseFromJSON(jsonValue));
    }

    /**
     * Remove user from project
     */
    async userProjectDelV1(requestParameters: UserProjectDelV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponse> {
        const response = await this.userProjectDelV1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get project full info
     */
    async userProjectGetProjectInfoV1Raw(requestParameters: UserProjectGetProjectInfoV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectInfoResponse>> {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError(
                'language',
                'Required parameter "language" was null or undefined when calling userProjectGetProjectInfoV1().'
            );
        }

        if (requestParameters['project_id'] == null) {
            throw new runtime.RequiredError(
                'project_id',
                'Required parameter "project_id" was null or undefined when calling userProjectGetProjectInfoV1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        } else {
            queryParameters['v'] = '1';
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        if (requestParameters['project_id'] != null) {
            queryParameters['project_id'] = requestParameters['project_id'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/method/project/get_project_info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectInfoResponseFromJSON(jsonValue));
    }

    /**
     * Get project full info
     */
    async userProjectGetProjectInfoV1(requestParameters: UserProjectGetProjectInfoV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectInfoResponse> {
        const response = await this.userProjectGetProjectInfoV1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get project by number id
     */
    async userProjectGetProjectV1Raw(requestParameters: UserProjectGetProjectV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProjectGetResponse>> {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError(
                'language',
                'Required parameter "language" was null or undefined when calling userProjectGetProjectV1().'
            );
        }

        if (requestParameters['project_external_id'] == null) {
            throw new runtime.RequiredError(
                'project_external_id',
                'Required parameter "project_external_id" was null or undefined when calling userProjectGetProjectV1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        } else {
            queryParameters['v'] = '1';
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        if (requestParameters['project_external_id'] != null) {
            queryParameters['project_external_id'] = requestParameters['project_external_id'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/method/project/get_project`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProjectGetResponseFromJSON(jsonValue));
    }

    /**
     * Get project by number id
     */
    async userProjectGetProjectV1(requestParameters: UserProjectGetProjectV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProjectGetResponse> {
        const response = await this.userProjectGetProjectV1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get user by number id
     */
    async userProjectGetUserV1Raw(requestParameters: UserProjectGetUserV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProjectGetResponse>> {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError(
                'language',
                'Required parameter "language" was null or undefined when calling userProjectGetUserV1().'
            );
        }

        if (requestParameters['user_external_id'] == null) {
            throw new runtime.RequiredError(
                'user_external_id',
                'Required parameter "user_external_id" was null or undefined when calling userProjectGetUserV1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        } else {
            queryParameters['v'] = '1';
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        if (requestParameters['user_external_id'] != null) {
            queryParameters['user_external_id'] = requestParameters['user_external_id'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/method/project/get_user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProjectGetResponseFromJSON(jsonValue));
    }

    /**
     * Get user by number id
     */
    async userProjectGetUserV1(requestParameters: UserProjectGetUserV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProjectGetResponse> {
        const response = await this.userProjectGetUserV1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List of user in project
     */
    async userProjectListAccessV1Raw(requestParameters: UserProjectListAccessV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListOfUserProject2ProjectResponse>> {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError(
                'language',
                'Required parameter "language" was null or undefined when calling userProjectListAccessV1().'
            );
        }

        if (requestParameters['project_id'] == null) {
            throw new runtime.RequiredError(
                'project_id',
                'Required parameter "project_id" was null or undefined when calling userProjectListAccessV1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        } else {
            queryParameters['v'] = '1';
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        if (requestParameters['project_id'] != null) {
            queryParameters['project_id'] = requestParameters['project_id'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/method/project/user/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListOfUserProject2ProjectResponseFromJSON(jsonValue));
    }

    /**
     * List of user in project
     */
    async userProjectListAccessV1(requestParameters: UserProjectListAccessV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListOfUserProject2ProjectResponse> {
        const response = await this.userProjectListAccessV1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List of project for current user
     */
    async userProjectListV1Raw(requestParameters: UserProjectListV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedResponseOfUserProjectResponse>> {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError(
                'language',
                'Required parameter "language" was null or undefined when calling userProjectListV1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        } else {
            queryParameters['v'] = '1';
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/method/project/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedResponseOfUserProjectResponseFromJSON(jsonValue));
    }

    /**
     * List of project for current user
     */
    async userProjectListV1(requestParameters: UserProjectListV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedResponseOfUserProjectResponse> {
        const response = await this.userProjectListV1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Select user for project
     */
    async userProjectSelectProjectV1Raw(requestParameters: UserProjectSelectProjectV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProjectGetResponse>> {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError(
                'language',
                'Required parameter "language" was null or undefined when calling userProjectSelectProjectV1().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling userProjectSelectProjectV1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        } else {
            queryParameters['v'] = '1';
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        if (requestParameters['id'] != null) {
            queryParameters['id'] = requestParameters['id'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/method/project/select`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProjectGetResponseFromJSON(jsonValue));
    }

    /**
     * Select user for project
     */
    async userProjectSelectProjectV1(requestParameters: UserProjectSelectProjectV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProjectGetResponse> {
        const response = await this.userProjectSelectProjectV1Raw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const UserProjectChangeAccessV1LanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type UserProjectChangeAccessV1LanguageEnum = typeof UserProjectChangeAccessV1LanguageEnum[keyof typeof UserProjectChangeAccessV1LanguageEnum];
/**
 * @export
 */
export const UserProjectChangeAccessV1AccessTypeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type UserProjectChangeAccessV1AccessTypeEnum = typeof UserProjectChangeAccessV1AccessTypeEnum[keyof typeof UserProjectChangeAccessV1AccessTypeEnum];
/**
 * @export
 */
export const UserProjectChangeAccessV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type UserProjectChangeAccessV1VEnum = typeof UserProjectChangeAccessV1VEnum[keyof typeof UserProjectChangeAccessV1VEnum];
/**
 * @export
 */
export const UserProjectDelV1LanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type UserProjectDelV1LanguageEnum = typeof UserProjectDelV1LanguageEnum[keyof typeof UserProjectDelV1LanguageEnum];
/**
 * @export
 */
export const UserProjectDelV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type UserProjectDelV1VEnum = typeof UserProjectDelV1VEnum[keyof typeof UserProjectDelV1VEnum];
/**
 * @export
 */
export const UserProjectGetProjectInfoV1LanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type UserProjectGetProjectInfoV1LanguageEnum = typeof UserProjectGetProjectInfoV1LanguageEnum[keyof typeof UserProjectGetProjectInfoV1LanguageEnum];
/**
 * @export
 */
export const UserProjectGetProjectInfoV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type UserProjectGetProjectInfoV1VEnum = typeof UserProjectGetProjectInfoV1VEnum[keyof typeof UserProjectGetProjectInfoV1VEnum];
/**
 * @export
 */
export const UserProjectGetProjectV1LanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type UserProjectGetProjectV1LanguageEnum = typeof UserProjectGetProjectV1LanguageEnum[keyof typeof UserProjectGetProjectV1LanguageEnum];
/**
 * @export
 */
export const UserProjectGetProjectV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type UserProjectGetProjectV1VEnum = typeof UserProjectGetProjectV1VEnum[keyof typeof UserProjectGetProjectV1VEnum];
/**
 * @export
 */
export const UserProjectGetUserV1LanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type UserProjectGetUserV1LanguageEnum = typeof UserProjectGetUserV1LanguageEnum[keyof typeof UserProjectGetUserV1LanguageEnum];
/**
 * @export
 */
export const UserProjectGetUserV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type UserProjectGetUserV1VEnum = typeof UserProjectGetUserV1VEnum[keyof typeof UserProjectGetUserV1VEnum];
/**
 * @export
 */
export const UserProjectListAccessV1LanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type UserProjectListAccessV1LanguageEnum = typeof UserProjectListAccessV1LanguageEnum[keyof typeof UserProjectListAccessV1LanguageEnum];
/**
 * @export
 */
export const UserProjectListAccessV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type UserProjectListAccessV1VEnum = typeof UserProjectListAccessV1VEnum[keyof typeof UserProjectListAccessV1VEnum];
/**
 * @export
 */
export const UserProjectListV1LanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type UserProjectListV1LanguageEnum = typeof UserProjectListV1LanguageEnum[keyof typeof UserProjectListV1LanguageEnum];
/**
 * @export
 */
export const UserProjectListV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type UserProjectListV1VEnum = typeof UserProjectListV1VEnum[keyof typeof UserProjectListV1VEnum];
/**
 * @export
 */
export const UserProjectSelectProjectV1LanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type UserProjectSelectProjectV1LanguageEnum = typeof UserProjectSelectProjectV1LanguageEnum[keyof typeof UserProjectSelectProjectV1LanguageEnum];
/**
 * @export
 */
export const UserProjectSelectProjectV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type UserProjectSelectProjectV1VEnum = typeof UserProjectSelectProjectV1VEnum[keyof typeof UserProjectSelectProjectV1VEnum];
