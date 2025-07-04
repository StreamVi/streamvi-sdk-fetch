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
  GetPaySettingResponseV3,
  PayCheckCountryResponse,
  PaySettingBodyDto,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    GetPaySettingResponseV3FromJSON,
    GetPaySettingResponseV3ToJSON,
    PayCheckCountryResponseFromJSON,
    PayCheckCountryResponseToJSON,
    PaySettingBodyDtoFromJSON,
    PaySettingBodyDtoToJSON,
} from '../models/index';

export interface PaySettingCheckCountryV1Request {
    language: PaySettingCheckCountryV1LanguageEnum;
    project_id: number;
    country_id: number;
    v?: PaySettingCheckCountryV1VEnum;
}

export interface PaySettingGetSettingV3Request {
    language: PaySettingGetSettingV3LanguageEnum;
    project_id: number;
    v?: PaySettingGetSettingV3VEnum;
}

export interface PaySettingSetSettingV1Request {
    PaySettingBodyDto: PaySettingBodyDto;
}

/**
 * PaySettingApi - interface
 * 
 * @export
 * @interface PaySettingApiInterface
 */
export interface PaySettingApiInterface {
    /**
     * 
     * @summary Check country after update user
     * @param {'ru' | 'en' | 'cn'} language Current language
     * @param {number} project_id Project id
     * @param {number} country_id country id
     * @param {'1' | '2' | '3'} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaySettingApiInterface
     */
    paySettingCheckCountryV1Raw(requestParameters: PaySettingCheckCountryV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PayCheckCountryResponse>>;

    /**
     * Check country after update user
     */
    paySettingCheckCountryV1(requestParameters: PaySettingCheckCountryV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PayCheckCountryResponse>;

    /**
     * 
     * @summary Get pay settings for profile v3
     * @param {'ru' | 'en' | 'cn'} language Current language
     * @param {number} project_id Project id
     * @param {'1' | '2' | '3'} [v] Version (automatically defaults to 3 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaySettingApiInterface
     */
    paySettingGetSettingV3Raw(requestParameters: PaySettingGetSettingV3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPaySettingResponseV3>>;

    /**
     * Get pay settings for profile v3
     */
    paySettingGetSettingV3(requestParameters: PaySettingGetSettingV3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPaySettingResponseV3>;

    /**
     * 
     * @summary Set pay settings for profile
     * @param {PaySettingBodyDto} PaySettingBodyDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaySettingApiInterface
     */
    paySettingSetSettingV1Raw(requestParameters: PaySettingSetSettingV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Set pay settings for profile
     */
    paySettingSetSettingV1(requestParameters: PaySettingSetSettingV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class PaySettingApi extends runtime.BaseAPI implements PaySettingApiInterface {

    /**
     * Check country after update user
     */
    async paySettingCheckCountryV1Raw(requestParameters: PaySettingCheckCountryV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PayCheckCountryResponse>> {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError(
                'language',
                'Required parameter "language" was null or undefined when calling paySettingCheckCountryV1().'
            );
        }

        if (requestParameters['project_id'] == null) {
            throw new runtime.RequiredError(
                'project_id',
                'Required parameter "project_id" was null or undefined when calling paySettingCheckCountryV1().'
            );
        }

        if (requestParameters['country_id'] == null) {
            throw new runtime.RequiredError(
                'country_id',
                'Required parameter "country_id" was null or undefined when calling paySettingCheckCountryV1().'
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

        if (requestParameters['country_id'] != null) {
            queryParameters['country_id'] = requestParameters['country_id'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/method/pay-setting/check-country`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PayCheckCountryResponseFromJSON(jsonValue));
    }

    /**
     * Check country after update user
     */
    async paySettingCheckCountryV1(requestParameters: PaySettingCheckCountryV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PayCheckCountryResponse> {
        const response = await this.paySettingCheckCountryV1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get pay settings for profile v3
     */
    async paySettingGetSettingV3Raw(requestParameters: PaySettingGetSettingV3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPaySettingResponseV3>> {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError(
                'language',
                'Required parameter "language" was null or undefined when calling paySettingGetSettingV3().'
            );
        }

        if (requestParameters['project_id'] == null) {
            throw new runtime.RequiredError(
                'project_id',
                'Required parameter "project_id" was null or undefined when calling paySettingGetSettingV3().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        } else {
            queryParameters['v'] = '3';
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        if (requestParameters['project_id'] != null) {
            queryParameters['project_id'] = requestParameters['project_id'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/method/pay-setting`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPaySettingResponseV3FromJSON(jsonValue));
    }

    /**
     * Get pay settings for profile v3
     */
    async paySettingGetSettingV3(requestParameters: PaySettingGetSettingV3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPaySettingResponseV3> {
        const response = await this.paySettingGetSettingV3Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Set pay settings for profile
     */
    async paySettingSetSettingV1Raw(requestParameters: PaySettingSetSettingV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['PaySettingBodyDto'] == null) {
            throw new runtime.RequiredError(
                'PaySettingBodyDto',
                'Required parameter "PaySettingBodyDto" was null or undefined when calling paySettingSetSettingV1().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/method/pay-setting`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaySettingBodyDtoToJSON(requestParameters['PaySettingBodyDto']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Set pay settings for profile
     */
    async paySettingSetSettingV1(requestParameters: PaySettingSetSettingV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.paySettingSetSettingV1Raw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const PaySettingCheckCountryV1LanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type PaySettingCheckCountryV1LanguageEnum = typeof PaySettingCheckCountryV1LanguageEnum[keyof typeof PaySettingCheckCountryV1LanguageEnum];
/**
 * @export
 */
export const PaySettingCheckCountryV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type PaySettingCheckCountryV1VEnum = typeof PaySettingCheckCountryV1VEnum[keyof typeof PaySettingCheckCountryV1VEnum];
/**
 * @export
 */
export const PaySettingGetSettingV3LanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type PaySettingGetSettingV3LanguageEnum = typeof PaySettingGetSettingV3LanguageEnum[keyof typeof PaySettingGetSettingV3LanguageEnum];
/**
 * @export
 */
export const PaySettingGetSettingV3VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type PaySettingGetSettingV3VEnum = typeof PaySettingGetSettingV3VEnum[keyof typeof PaySettingGetSettingV3VEnum];
