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
 * @interface GetStreamKeyResponse
 */
export interface GetStreamKeyResponse {
    /**
     * Seconds the stream guard
     * @type {number}
     * @memberof GetStreamKeyResponse
     */
    wait: number;
    /**
     * Is recordable stream
     * @type {boolean}
     * @memberof GetStreamKeyResponse
     */
    record: boolean;
    /**
     * Key
     * @type {string}
     * @memberof GetStreamKeyResponse
     */
    key: string;
}

/**
 * Check if a given object implements the GetStreamKeyResponse interface.
 */
export function instanceOfGetStreamKeyResponse(value: object): value is GetStreamKeyResponse {
    if (!('wait' in value) || value['wait'] === undefined) return false;
    if (!('record' in value) || value['record'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    return true;
}

export function GetStreamKeyResponseFromJSON(json: any): GetStreamKeyResponse {
    return GetStreamKeyResponseFromJSONTyped(json, false);
}

export function GetStreamKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStreamKeyResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'wait': json['wait'],
        'record': json['record'],
        'key': json['key'],
    };
}

export function GetStreamKeyResponseToJSON(json: any): GetStreamKeyResponse {
    return GetStreamKeyResponseToJSONTyped(json, false);
}

export function GetStreamKeyResponseToJSONTyped(value?: GetStreamKeyResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'wait': value['wait'],
        'record': value['record'],
        'key': value['key'],
    };
}

