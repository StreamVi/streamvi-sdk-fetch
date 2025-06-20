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
import type { ChannelVkCategoryInfoDto } from './ChannelVkCategoryInfoDto';
import {
    ChannelVkCategoryInfoDtoFromJSON,
    ChannelVkCategoryInfoDtoFromJSONTyped,
    ChannelVkCategoryInfoDtoToJSON,
    ChannelVkCategoryInfoDtoToJSONTyped,
} from './ChannelVkCategoryInfoDto';

/**
 * 
 * @export
 * @interface ChannelVkInfoDto
 */
export interface ChannelVkInfoDto {
    /**
     * Title of the channel
     * @type {string}
     * @memberof ChannelVkInfoDto
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelVkInfoDto
     */
    description: string;
    /**
     * 
     * @type {boolean}
     * @memberof ChannelVkInfoDto
     */
    wall?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChannelVkInfoDto
     */
    privacyVideo?: ChannelVkInfoDtoPrivacyVideoEnum;
    /**
     * 
     * @type {string}
     * @memberof ChannelVkInfoDto
     */
    privacyComments?: ChannelVkInfoDtoPrivacyCommentsEnum;
    /**
     * 
     * @type {ChannelPlayListInfoDto}
     * @memberof ChannelVkInfoDto
     */
    playlist?: ChannelPlayListInfoDto;
    /**
     * 
     * @type {ChannelVkCategoryInfoDto}
     * @memberof ChannelVkInfoDto
     */
    category?: ChannelVkCategoryInfoDto;
}


/**
 * @export
 */
export const ChannelVkInfoDtoPrivacyVideoEnum = {
    all: 'all',
    members: 'members',
    editors: 'editors',
    by_link: 'by_link',
    donut: 'donut'
} as const;
export type ChannelVkInfoDtoPrivacyVideoEnum = typeof ChannelVkInfoDtoPrivacyVideoEnum[keyof typeof ChannelVkInfoDtoPrivacyVideoEnum];

/**
 * @export
 */
export const ChannelVkInfoDtoPrivacyCommentsEnum = {
    all: 'all',
    members: 'members',
    editors: 'editors',
    nobody: 'nobody'
} as const;
export type ChannelVkInfoDtoPrivacyCommentsEnum = typeof ChannelVkInfoDtoPrivacyCommentsEnum[keyof typeof ChannelVkInfoDtoPrivacyCommentsEnum];


/**
 * Check if a given object implements the ChannelVkInfoDto interface.
 */
export function instanceOfChannelVkInfoDto(value: object): value is ChannelVkInfoDto {
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    return true;
}

export function ChannelVkInfoDtoFromJSON(json: any): ChannelVkInfoDto {
    return ChannelVkInfoDtoFromJSONTyped(json, false);
}

export function ChannelVkInfoDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelVkInfoDto {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'description': json['description'],
        'wall': json['wall'] == null ? undefined : json['wall'],
        'privacyVideo': json['privacyVideo'] == null ? undefined : json['privacyVideo'],
        'privacyComments': json['privacyComments'] == null ? undefined : json['privacyComments'],
        'playlist': json['playlist'] == null ? undefined : ChannelPlayListInfoDtoFromJSON(json['playlist']),
        'category': json['category'] == null ? undefined : ChannelVkCategoryInfoDtoFromJSON(json['category']),
    };
}

export function ChannelVkInfoDtoToJSON(json: any): ChannelVkInfoDto {
    return ChannelVkInfoDtoToJSONTyped(json, false);
}

export function ChannelVkInfoDtoToJSONTyped(value?: ChannelVkInfoDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'description': value['description'],
        'wall': value['wall'],
        'privacyVideo': value['privacyVideo'],
        'privacyComments': value['privacyComments'],
        'playlist': ChannelPlayListInfoDtoToJSON(value['playlist']),
        'category': ChannelVkCategoryInfoDtoToJSON(value['category']),
    };
}

