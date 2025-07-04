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
 * @interface NotifyUserChannels
 */
export interface NotifyUserChannels {
    /**
     * Active cabinet
     * @type {boolean}
     * @memberof NotifyUserChannels
     */
    cabinet: boolean;
    /**
     * Active telegram
     * @type {boolean}
     * @memberof NotifyUserChannels
     */
    telegram: boolean;
    /**
     * Active mobile
     * @type {boolean}
     * @memberof NotifyUserChannels
     */
    mobile: boolean;
}

/**
 * Check if a given object implements the NotifyUserChannels interface.
 */
export function instanceOfNotifyUserChannels(value: object): value is NotifyUserChannels {
    if (!('cabinet' in value) || value['cabinet'] === undefined) return false;
    if (!('telegram' in value) || value['telegram'] === undefined) return false;
    if (!('mobile' in value) || value['mobile'] === undefined) return false;
    return true;
}

export function NotifyUserChannelsFromJSON(json: any): NotifyUserChannels {
    return NotifyUserChannelsFromJSONTyped(json, false);
}

export function NotifyUserChannelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotifyUserChannels {
    if (json == null) {
        return json;
    }
    return {
        
        'cabinet': json['cabinet'],
        'telegram': json['telegram'],
        'mobile': json['mobile'],
    };
}

export function NotifyUserChannelsToJSON(json: any): NotifyUserChannels {
    return NotifyUserChannelsToJSONTyped(json, false);
}

export function NotifyUserChannelsToJSONTyped(value?: NotifyUserChannels | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cabinet': value['cabinet'],
        'telegram': value['telegram'],
        'mobile': value['mobile'],
    };
}

