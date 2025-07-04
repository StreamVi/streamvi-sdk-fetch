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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdatePullKeyRequest
 */
export interface UpdatePullKeyRequest {
    /**
     * Version
     * @type {string}
     * @memberof UpdatePullKeyRequest
     */
    v: UpdatePullKeyRequestVEnum;
    /**
     * Current language
     * @type {string}
     * @memberof UpdatePullKeyRequest
     */
    language: UpdatePullKeyRequestLanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof UpdatePullKeyRequest
     */
    project_id: number;
    /**
     * Key
     * @type {string}
     * @memberof UpdatePullKeyRequest
     */
    key: string;
    /**
     * Region for link
     * @type {string}
     * @memberof UpdatePullKeyRequest
     */
    region: string;
}


/**
 * @export
 */
export const UpdatePullKeyRequestVEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type UpdatePullKeyRequestVEnum = typeof UpdatePullKeyRequestVEnum[keyof typeof UpdatePullKeyRequestVEnum];

/**
 * @export
 */
export const UpdatePullKeyRequestLanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type UpdatePullKeyRequestLanguageEnum = typeof UpdatePullKeyRequestLanguageEnum[keyof typeof UpdatePullKeyRequestLanguageEnum];


/**
 * Check if a given object implements the UpdatePullKeyRequest interface.
 */
export function instanceOfUpdatePullKeyRequest(value: object): value is UpdatePullKeyRequest {
    if (!('v' in value) || value['v'] === undefined) return false;
    if (!('language' in value) || value['language'] === undefined) return false;
    if (!('project_id' in value) || value['project_id'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('region' in value) || value['region'] === undefined) return false;
    return true;
}

export function UpdatePullKeyRequestFromJSON(json: any): UpdatePullKeyRequest {
    return UpdatePullKeyRequestFromJSONTyped(json, false);
}

export function UpdatePullKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatePullKeyRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'v': json['v'],
        'language': json['language'],
        'project_id': json['project_id'],
        'key': json['key'],
        'region': json['region'],
    };
}

export function UpdatePullKeyRequestToJSON(json: any): UpdatePullKeyRequest {
    return UpdatePullKeyRequestToJSONTyped(json, false);
}

export function UpdatePullKeyRequestToJSONTyped(value?: UpdatePullKeyRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'v': value['v'],
        'language': value['language'],
        'project_id': value['project_id'],
        'key': value['key'],
        'region': value['region'],
    };
}

