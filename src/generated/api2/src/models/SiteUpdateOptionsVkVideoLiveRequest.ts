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
 * @interface SiteUpdateOptionsVkVideoLiveRequest
 */
export interface SiteUpdateOptionsVkVideoLiveRequest {
    /**
     * Version
     * @type {string}
     * @memberof SiteUpdateOptionsVkVideoLiveRequest
     */
    v: SiteUpdateOptionsVkVideoLiveRequestVEnum;
    /**
     * Current language
     * @type {string}
     * @memberof SiteUpdateOptionsVkVideoLiveRequest
     */
    language: SiteUpdateOptionsVkVideoLiveRequestLanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof SiteUpdateOptionsVkVideoLiveRequest
     */
    project_id: number;
    /**
     * Channel id
     * @type {number}
     * @memberof SiteUpdateOptionsVkVideoLiveRequest
     */
    channel_id: number;
    /**
     * 
     * @type {string}
     * @memberof SiteUpdateOptionsVkVideoLiveRequest
     */
    title: string;
    /**
     * category id
     * @type {string}
     * @memberof SiteUpdateOptionsVkVideoLiveRequest
     */
    category_id?: string;
    /**
     * category name
     * @type {string}
     * @memberof SiteUpdateOptionsVkVideoLiveRequest
     */
    category_name?: string;
}


/**
 * @export
 */
export const SiteUpdateOptionsVkVideoLiveRequestVEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type SiteUpdateOptionsVkVideoLiveRequestVEnum = typeof SiteUpdateOptionsVkVideoLiveRequestVEnum[keyof typeof SiteUpdateOptionsVkVideoLiveRequestVEnum];

/**
 * @export
 */
export const SiteUpdateOptionsVkVideoLiveRequestLanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type SiteUpdateOptionsVkVideoLiveRequestLanguageEnum = typeof SiteUpdateOptionsVkVideoLiveRequestLanguageEnum[keyof typeof SiteUpdateOptionsVkVideoLiveRequestLanguageEnum];


/**
 * Check if a given object implements the SiteUpdateOptionsVkVideoLiveRequest interface.
 */
export function instanceOfSiteUpdateOptionsVkVideoLiveRequest(value: object): value is SiteUpdateOptionsVkVideoLiveRequest {
    if (!('v' in value) || value['v'] === undefined) return false;
    if (!('language' in value) || value['language'] === undefined) return false;
    if (!('project_id' in value) || value['project_id'] === undefined) return false;
    if (!('channel_id' in value) || value['channel_id'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    return true;
}

export function SiteUpdateOptionsVkVideoLiveRequestFromJSON(json: any): SiteUpdateOptionsVkVideoLiveRequest {
    return SiteUpdateOptionsVkVideoLiveRequestFromJSONTyped(json, false);
}

export function SiteUpdateOptionsVkVideoLiveRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SiteUpdateOptionsVkVideoLiveRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'v': json['v'],
        'language': json['language'],
        'project_id': json['project_id'],
        'channel_id': json['channel_id'],
        'title': json['title'],
        'category_id': json['category_id'] == null ? undefined : json['category_id'],
        'category_name': json['category_name'] == null ? undefined : json['category_name'],
    };
}

export function SiteUpdateOptionsVkVideoLiveRequestToJSON(json: any): SiteUpdateOptionsVkVideoLiveRequest {
    return SiteUpdateOptionsVkVideoLiveRequestToJSONTyped(json, false);
}

export function SiteUpdateOptionsVkVideoLiveRequestToJSONTyped(value?: SiteUpdateOptionsVkVideoLiveRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'v': value['v'],
        'language': value['language'],
        'project_id': value['project_id'],
        'channel_id': value['channel_id'],
        'title': value['title'],
        'category_id': value['category_id'],
        'category_name': value['category_name'],
    };
}

