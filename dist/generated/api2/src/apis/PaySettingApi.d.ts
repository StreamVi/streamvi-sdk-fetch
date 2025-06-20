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
import type { GetPaySettingResponseV3, PayCheckCountryResponse, PaySettingBodyDto } from '../models/index';
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
export declare class PaySettingApi extends runtime.BaseAPI implements PaySettingApiInterface {
    /**
     * Check country after update user
     */
    paySettingCheckCountryV1Raw(requestParameters: PaySettingCheckCountryV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PayCheckCountryResponse>>;
    /**
     * Check country after update user
     */
    paySettingCheckCountryV1(requestParameters: PaySettingCheckCountryV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PayCheckCountryResponse>;
    /**
     * Get pay settings for profile v3
     */
    paySettingGetSettingV3Raw(requestParameters: PaySettingGetSettingV3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPaySettingResponseV3>>;
    /**
     * Get pay settings for profile v3
     */
    paySettingGetSettingV3(requestParameters: PaySettingGetSettingV3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPaySettingResponseV3>;
    /**
     * Set pay settings for profile
     */
    paySettingSetSettingV1Raw(requestParameters: PaySettingSetSettingV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Set pay settings for profile
     */
    paySettingSetSettingV1(requestParameters: PaySettingSetSettingV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
/**
 * @export
 */
export declare const PaySettingCheckCountryV1LanguageEnum: {
    readonly ru: "ru";
    readonly en: "en";
    readonly cn: "cn";
};
export type PaySettingCheckCountryV1LanguageEnum = typeof PaySettingCheckCountryV1LanguageEnum[keyof typeof PaySettingCheckCountryV1LanguageEnum];
/**
 * @export
 */
export declare const PaySettingCheckCountryV1VEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type PaySettingCheckCountryV1VEnum = typeof PaySettingCheckCountryV1VEnum[keyof typeof PaySettingCheckCountryV1VEnum];
/**
 * @export
 */
export declare const PaySettingGetSettingV3LanguageEnum: {
    readonly ru: "ru";
    readonly en: "en";
    readonly cn: "cn";
};
export type PaySettingGetSettingV3LanguageEnum = typeof PaySettingGetSettingV3LanguageEnum[keyof typeof PaySettingGetSettingV3LanguageEnum];
/**
 * @export
 */
export declare const PaySettingGetSettingV3VEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type PaySettingGetSettingV3VEnum = typeof PaySettingGetSettingV3VEnum[keyof typeof PaySettingGetSettingV3VEnum];
//# sourceMappingURL=PaySettingApi.d.ts.map