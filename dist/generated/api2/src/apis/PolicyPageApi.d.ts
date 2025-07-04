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
import type { GetPolicyStructureDto } from '../models/index';
export interface PolicyPageGetItemV1Request {
    language: PolicyPageGetItemV1LanguageEnum;
    file_name: PolicyPageGetItemV1FileNameEnum;
    v?: PolicyPageGetItemV1VEnum;
}
export interface PolicyPageGetStructureV1Request {
    language: PolicyPageGetStructureV1LanguageEnum;
    v?: PolicyPageGetStructureV1VEnum;
}
/**
 * PolicyPageApi - interface
 *
 * @export
 * @interface PolicyPageApiInterface
 */
export interface PolicyPageApiInterface {
    /**
     *
     * @summary Get policy page
     * @param {'ru' | 'en' | 'cn'} language Current language
     * @param {'refund' | 'terms-of-use' | 'using-cookie' | 'acceptable-use' | 'privacy-notice'} file_name Policy file name
     * @param {'1' | '2' | '3'} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyPageApiInterface
     */
    policyPageGetItemV1Raw(requestParameters: PolicyPageGetItemV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Get policy page
     */
    policyPageGetItemV1(requestParameters: PolicyPageGetItemV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *
     * @summary Get policy structure
     * @param {'ru' | 'en' | 'cn'} language Current language
     * @param {'1' | '2' | '3'} [v] Version (automatically defaults to 1 based on method version, can be overridden)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyPageApiInterface
     */
    policyPageGetStructureV1Raw(requestParameters: PolicyPageGetStructureV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPolicyStructureDto>>;
    /**
     * Get policy structure
     */
    policyPageGetStructureV1(requestParameters: PolicyPageGetStructureV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPolicyStructureDto>;
}
/**
 *
 */
export declare class PolicyPageApi extends runtime.BaseAPI implements PolicyPageApiInterface {
    /**
     * Get policy page
     */
    policyPageGetItemV1Raw(requestParameters: PolicyPageGetItemV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Get policy page
     */
    policyPageGetItemV1(requestParameters: PolicyPageGetItemV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Get policy structure
     */
    policyPageGetStructureV1Raw(requestParameters: PolicyPageGetStructureV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPolicyStructureDto>>;
    /**
     * Get policy structure
     */
    policyPageGetStructureV1(requestParameters: PolicyPageGetStructureV1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPolicyStructureDto>;
}
/**
 * @export
 */
export declare const PolicyPageGetItemV1LanguageEnum: {
    readonly ru: "ru";
    readonly en: "en";
    readonly cn: "cn";
};
export type PolicyPageGetItemV1LanguageEnum = typeof PolicyPageGetItemV1LanguageEnum[keyof typeof PolicyPageGetItemV1LanguageEnum];
/**
 * @export
 */
export declare const PolicyPageGetItemV1FileNameEnum: {
    readonly refund: "refund";
    readonly terms_of_use: "terms-of-use";
    readonly using_cookie: "using-cookie";
    readonly acceptable_use: "acceptable-use";
    readonly privacy_notice: "privacy-notice";
};
export type PolicyPageGetItemV1FileNameEnum = typeof PolicyPageGetItemV1FileNameEnum[keyof typeof PolicyPageGetItemV1FileNameEnum];
/**
 * @export
 */
export declare const PolicyPageGetItemV1VEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type PolicyPageGetItemV1VEnum = typeof PolicyPageGetItemV1VEnum[keyof typeof PolicyPageGetItemV1VEnum];
/**
 * @export
 */
export declare const PolicyPageGetStructureV1LanguageEnum: {
    readonly ru: "ru";
    readonly en: "en";
    readonly cn: "cn";
};
export type PolicyPageGetStructureV1LanguageEnum = typeof PolicyPageGetStructureV1LanguageEnum[keyof typeof PolicyPageGetStructureV1LanguageEnum];
/**
 * @export
 */
export declare const PolicyPageGetStructureV1VEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type PolicyPageGetStructureV1VEnum = typeof PolicyPageGetStructureV1VEnum[keyof typeof PolicyPageGetStructureV1VEnum];
//# sourceMappingURL=PolicyPageApi.d.ts.map