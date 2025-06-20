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
import type { ChannelPlayListInfoDto } from './ChannelPlayListInfoDto';
import {
    ChannelPlayListInfoDtoFromJSON,
    ChannelPlayListInfoDtoFromJSONTyped,
    ChannelPlayListInfoDtoToJSON,
    ChannelPlayListInfoDtoToJSONTyped,
} from './ChannelPlayListInfoDto';
import type { ChannelCategoryInfoDto } from './ChannelCategoryInfoDto';
import {
    ChannelCategoryInfoDtoFromJSON,
    ChannelCategoryInfoDtoFromJSONTyped,
    ChannelCategoryInfoDtoToJSON,
    ChannelCategoryInfoDtoToJSONTyped,
} from './ChannelCategoryInfoDto';

/**
 * 
 * @export
 * @interface ChannelYoutubeInfoDto
 */
export interface ChannelYoutubeInfoDto {
    /**
     * Title of the channel
     * @type {string}
     * @memberof ChannelYoutubeInfoDto
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelYoutubeInfoDto
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelYoutubeInfoDto
     */
    lang?: ChannelYoutubeInfoDtoLangEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof ChannelYoutubeInfoDto
     */
    tags?: Array<string>;
    /**
     * 
     * @type {ChannelCategoryInfoDto}
     * @memberof ChannelYoutubeInfoDto
     */
    category?: ChannelCategoryInfoDto;
    /**
     * 
     * @type {ChannelPlayListInfoDto}
     * @memberof ChannelYoutubeInfoDto
     */
    playlist?: ChannelPlayListInfoDto;
    /**
     * 
     * @type {string}
     * @memberof ChannelYoutubeInfoDto
     */
    privacyVideo?: ChannelYoutubeInfoDtoPrivacyVideoEnum;
    /**
     * 
     * @type {string}
     * @memberof ChannelYoutubeInfoDto
     */
    latency?: ChannelYoutubeInfoDtoLatencyEnum;
    /**
     * 
     * @type {string}
     * @memberof ChannelYoutubeInfoDto
     */
    audience?: ChannelYoutubeInfoDtoAudienceEnum;
    /**
     * 
     * @type {string}
     * @memberof ChannelYoutubeInfoDto
     */
    image?: string;
}


/**
 * @export
 */
export const ChannelYoutubeInfoDtoLangEnum = {
    ru: 'ru',
    en: 'en'
} as const;
export type ChannelYoutubeInfoDtoLangEnum = typeof ChannelYoutubeInfoDtoLangEnum[keyof typeof ChannelYoutubeInfoDtoLangEnum];

/**
 * @export
 */
export const ChannelYoutubeInfoDtoPrivacyVideoEnum = {
    private: 'private',
    public: 'public',
    unlisted: 'unlisted'
} as const;
export type ChannelYoutubeInfoDtoPrivacyVideoEnum = typeof ChannelYoutubeInfoDtoPrivacyVideoEnum[keyof typeof ChannelYoutubeInfoDtoPrivacyVideoEnum];

/**
 * @export
 */
export const ChannelYoutubeInfoDtoLatencyEnum = {
    normal: 'normal',
    low: 'low',
    ultraLow: 'ultraLow'
} as const;
export type ChannelYoutubeInfoDtoLatencyEnum = typeof ChannelYoutubeInfoDtoLatencyEnum[keyof typeof ChannelYoutubeInfoDtoLatencyEnum];

/**
 * @export
 */
export const ChannelYoutubeInfoDtoAudienceEnum = {
    mark_for_kids: 'mark_for_kids',
    mark_for_nokids: 'mark_for_nokids'
} as const;
export type ChannelYoutubeInfoDtoAudienceEnum = typeof ChannelYoutubeInfoDtoAudienceEnum[keyof typeof ChannelYoutubeInfoDtoAudienceEnum];


/**
 * Check if a given object implements the ChannelYoutubeInfoDto interface.
 */
export function instanceOfChannelYoutubeInfoDto(value: object): value is ChannelYoutubeInfoDto {
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    return true;
}

export function ChannelYoutubeInfoDtoFromJSON(json: any): ChannelYoutubeInfoDto {
    return ChannelYoutubeInfoDtoFromJSONTyped(json, false);
}

export function ChannelYoutubeInfoDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelYoutubeInfoDto {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'description': json['description'],
        'lang': json['lang'] == null ? undefined : json['lang'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'category': json['category'] == null ? undefined : ChannelCategoryInfoDtoFromJSON(json['category']),
        'playlist': json['playlist'] == null ? undefined : ChannelPlayListInfoDtoFromJSON(json['playlist']),
        'privacyVideo': json['privacyVideo'] == null ? undefined : json['privacyVideo'],
        'latency': json['latency'] == null ? undefined : json['latency'],
        'audience': json['audience'] == null ? undefined : json['audience'],
        'image': json['image'] == null ? undefined : json['image'],
    };
}

export function ChannelYoutubeInfoDtoToJSON(json: any): ChannelYoutubeInfoDto {
    return ChannelYoutubeInfoDtoToJSONTyped(json, false);
}

export function ChannelYoutubeInfoDtoToJSONTyped(value?: ChannelYoutubeInfoDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'description': value['description'],
        'lang': value['lang'],
        'tags': value['tags'],
        'category': ChannelCategoryInfoDtoToJSON(value['category']),
        'playlist': ChannelPlayListInfoDtoToJSON(value['playlist']),
        'privacyVideo': value['privacyVideo'],
        'latency': value['latency'],
        'audience': value['audience'],
        'image': value['image'],
    };
}

