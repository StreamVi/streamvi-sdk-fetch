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
 * @interface GetShortChannelItem
 */
export interface GetShortChannelItem {
    /**
     * channel_id
     * @type {number}
     * @memberof GetShortChannelItem
     */
    channel_id: number;
    /**
     * type
     * @type {string}
     * @memberof GetShortChannelItem
     */
    type: string;
    /**
     * name
     * @type {string}
     * @memberof GetShortChannelItem
     */
    name: string;
    /**
     * photo_default
     * @type {string}
     * @memberof GetShortChannelItem
     */
    photo_default: string | null;
}

/**
 * Check if a given object implements the GetShortChannelItem interface.
 */
export function instanceOfGetShortChannelItem(value: object): value is GetShortChannelItem {
    if (!('channel_id' in value) || value['channel_id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('photo_default' in value) || value['photo_default'] === undefined) return false;
    return true;
}

export function GetShortChannelItemFromJSON(json: any): GetShortChannelItem {
    return GetShortChannelItemFromJSONTyped(json, false);
}

export function GetShortChannelItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetShortChannelItem {
    if (json == null) {
        return json;
    }
    return {
        
        'channel_id': json['channel_id'],
        'type': json['type'],
        'name': json['name'],
        'photo_default': json['photo_default'],
    };
}

export function GetShortChannelItemToJSON(json: any): GetShortChannelItem {
    return GetShortChannelItemToJSONTyped(json, false);
}

export function GetShortChannelItemToJSONTyped(value?: GetShortChannelItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'channel_id': value['channel_id'],
        'type': value['type'],
        'name': value['name'],
        'photo_default': value['photo_default'],
    };
}

