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
 * @interface RtmpServerPlatformQuality
 */
export interface RtmpServerPlatformQuality {
    /**
     * Platform id
     * @type {number}
     * @memberof RtmpServerPlatformQuality
     */
    id: number;
    /**
     * Quality connection
     * @type {number}
     * @memberof RtmpServerPlatformQuality
     */
    quality: number;
    /**
     * Title of platform
     * @type {string}
     * @memberof RtmpServerPlatformQuality
     */
    title: string;
    /**
     * Quality in string format
     * @type {string}
     * @memberof RtmpServerPlatformQuality
     */
    status: RtmpServerPlatformQualityStatusEnum;
    /**
     * Reconnect
     * @type {number}
     * @memberof RtmpServerPlatformQuality
     */
    reconnect: number;
}


/**
 * @export
 */
export const RtmpServerPlatformQualityStatusEnum = {
    good: 'good',
    problem: 'problem',
    bad: 'bad'
} as const;
export type RtmpServerPlatformQualityStatusEnum = typeof RtmpServerPlatformQualityStatusEnum[keyof typeof RtmpServerPlatformQualityStatusEnum];


/**
 * Check if a given object implements the RtmpServerPlatformQuality interface.
 */
export function instanceOfRtmpServerPlatformQuality(value: object): value is RtmpServerPlatformQuality {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('quality' in value) || value['quality'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('reconnect' in value) || value['reconnect'] === undefined) return false;
    return true;
}

export function RtmpServerPlatformQualityFromJSON(json: any): RtmpServerPlatformQuality {
    return RtmpServerPlatformQualityFromJSONTyped(json, false);
}

export function RtmpServerPlatformQualityFromJSONTyped(json: any, ignoreDiscriminator: boolean): RtmpServerPlatformQuality {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'quality': json['quality'],
        'title': json['title'],
        'status': json['status'],
        'reconnect': json['reconnect'],
    };
}

export function RtmpServerPlatformQualityToJSON(json: any): RtmpServerPlatformQuality {
    return RtmpServerPlatformQualityToJSONTyped(json, false);
}

export function RtmpServerPlatformQualityToJSONTyped(value?: RtmpServerPlatformQuality | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'quality': value['quality'],
        'title': value['title'],
        'status': value['status'],
        'reconnect': value['reconnect'],
    };
}

