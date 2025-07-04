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
 * @interface SitePromoApplyResponse
 */
export interface SitePromoApplyResponse {
    /**
     * Result apply code
     * @type {string}
     * @memberof SitePromoApplyResponse
     */
    result: SitePromoApplyResponseResultEnum;
}


/**
 * @export
 */
export const SitePromoApplyResponseResultEnum = {
    top_up: 'top_up',
    tariff: 'tariff'
} as const;
export type SitePromoApplyResponseResultEnum = typeof SitePromoApplyResponseResultEnum[keyof typeof SitePromoApplyResponseResultEnum];


/**
 * Check if a given object implements the SitePromoApplyResponse interface.
 */
export function instanceOfSitePromoApplyResponse(value: object): value is SitePromoApplyResponse {
    if (!('result' in value) || value['result'] === undefined) return false;
    return true;
}

export function SitePromoApplyResponseFromJSON(json: any): SitePromoApplyResponse {
    return SitePromoApplyResponseFromJSONTyped(json, false);
}

export function SitePromoApplyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SitePromoApplyResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'],
    };
}

export function SitePromoApplyResponseToJSON(json: any): SitePromoApplyResponse {
    return SitePromoApplyResponseToJSONTyped(json, false);
}

export function SitePromoApplyResponseToJSONTyped(value?: SitePromoApplyResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'result': value['result'],
    };
}

