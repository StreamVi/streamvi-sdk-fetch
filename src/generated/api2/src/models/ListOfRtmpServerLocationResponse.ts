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
import type { RtmpServerLocationResponse } from './RtmpServerLocationResponse';
import {
    RtmpServerLocationResponseFromJSON,
    RtmpServerLocationResponseFromJSONTyped,
    RtmpServerLocationResponseToJSON,
    RtmpServerLocationResponseToJSONTyped,
} from './RtmpServerLocationResponse';

/**
 * 
 * @export
 * @interface ListOfRtmpServerLocationResponse
 */
export interface ListOfRtmpServerLocationResponse {
    /**
     * 
     * @type {Array<RtmpServerLocationResponse>}
     * @memberof ListOfRtmpServerLocationResponse
     */
    results: Array<RtmpServerLocationResponse>;
}

/**
 * Check if a given object implements the ListOfRtmpServerLocationResponse interface.
 */
export function instanceOfListOfRtmpServerLocationResponse(value: object): value is ListOfRtmpServerLocationResponse {
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function ListOfRtmpServerLocationResponseFromJSON(json: any): ListOfRtmpServerLocationResponse {
    return ListOfRtmpServerLocationResponseFromJSONTyped(json, false);
}

export function ListOfRtmpServerLocationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListOfRtmpServerLocationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'results': ((json['results'] as Array<any>).map(RtmpServerLocationResponseFromJSON)),
    };
}

export function ListOfRtmpServerLocationResponseToJSON(json: any): ListOfRtmpServerLocationResponse {
    return ListOfRtmpServerLocationResponseToJSONTyped(json, false);
}

export function ListOfRtmpServerLocationResponseToJSONTyped(value?: ListOfRtmpServerLocationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'results': ((value['results'] as Array<any>).map(RtmpServerLocationResponseToJSON)),
    };
}

