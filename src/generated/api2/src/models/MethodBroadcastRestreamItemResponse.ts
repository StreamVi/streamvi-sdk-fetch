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
 * @interface MethodBroadcastRestreamItemResponse
 */
export interface MethodBroadcastRestreamItemResponse {
    /**
     * Restream Id
     * @type {number}
     * @memberof MethodBroadcastRestreamItemResponse
     */
    restream_id: number;
    /**
     * Channel Id
     * @type {number}
     * @memberof MethodBroadcastRestreamItemResponse
     */
    channel_id: number;
    /**
     * Platform name
     * @type {string}
     * @memberof MethodBroadcastRestreamItemResponse
     */
    name: string;
    /**
     * Platform image
     * @type {string}
     * @memberof MethodBroadcastRestreamItemResponse
     */
    image: string;
    /**
     * Platform type
     * @type {string}
     * @memberof MethodBroadcastRestreamItemResponse
     */
    platform: string;
    /**
     * Viewer count
     * @type {number}
     * @memberof MethodBroadcastRestreamItemResponse
     */
    viewers: number | null;
}

/**
 * Check if a given object implements the MethodBroadcastRestreamItemResponse interface.
 */
export function instanceOfMethodBroadcastRestreamItemResponse(value: object): value is MethodBroadcastRestreamItemResponse {
    if (!('restream_id' in value) || value['restream_id'] === undefined) return false;
    if (!('channel_id' in value) || value['channel_id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('image' in value) || value['image'] === undefined) return false;
    if (!('platform' in value) || value['platform'] === undefined) return false;
    if (!('viewers' in value) || value['viewers'] === undefined) return false;
    return true;
}

export function MethodBroadcastRestreamItemResponseFromJSON(json: any): MethodBroadcastRestreamItemResponse {
    return MethodBroadcastRestreamItemResponseFromJSONTyped(json, false);
}

export function MethodBroadcastRestreamItemResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MethodBroadcastRestreamItemResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'restream_id': json['restream_id'],
        'channel_id': json['channel_id'],
        'name': json['name'],
        'image': json['image'],
        'platform': json['platform'],
        'viewers': json['viewers'],
    };
}

export function MethodBroadcastRestreamItemResponseToJSON(json: any): MethodBroadcastRestreamItemResponse {
    return MethodBroadcastRestreamItemResponseToJSONTyped(json, false);
}

export function MethodBroadcastRestreamItemResponseToJSONTyped(value?: MethodBroadcastRestreamItemResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'restream_id': value['restream_id'],
        'channel_id': value['channel_id'],
        'name': value['name'],
        'image': value['image'],
        'platform': value['platform'],
        'viewers': value['viewers'],
    };
}

