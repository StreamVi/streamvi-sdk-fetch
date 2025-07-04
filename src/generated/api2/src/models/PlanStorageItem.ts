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
 * @interface PlanStorageItem
 */
export interface PlanStorageItem {
    /**
     * Plan restream id
     * @type {number}
     * @memberof PlanStorageItem
     */
    id: number;
    /**
     * Size
     * @type {number}
     * @memberof PlanStorageItem
     */
    size: number;
    /**
     * Period
     * @type {string}
     * @memberof PlanStorageItem
     */
    period: PlanStorageItemPeriodEnum;
    /**
     * Date end tariff
     * @type {Date}
     * @memberof PlanStorageItem
     */
    date_end: Date;
}


/**
 * @export
 */
export const PlanStorageItemPeriodEnum = {
    month: 'month',
    year: 'year'
} as const;
export type PlanStorageItemPeriodEnum = typeof PlanStorageItemPeriodEnum[keyof typeof PlanStorageItemPeriodEnum];


/**
 * Check if a given object implements the PlanStorageItem interface.
 */
export function instanceOfPlanStorageItem(value: object): value is PlanStorageItem {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('period' in value) || value['period'] === undefined) return false;
    if (!('date_end' in value) || value['date_end'] === undefined) return false;
    return true;
}

export function PlanStorageItemFromJSON(json: any): PlanStorageItem {
    return PlanStorageItemFromJSONTyped(json, false);
}

export function PlanStorageItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanStorageItem {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'size': json['size'],
        'period': json['period'],
        'date_end': (new Date(json['date_end'])),
    };
}

export function PlanStorageItemToJSON(json: any): PlanStorageItem {
    return PlanStorageItemToJSONTyped(json, false);
}

export function PlanStorageItemToJSONTyped(value?: PlanStorageItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'size': value['size'],
        'period': value['period'],
        'date_end': ((value['date_end']).toISOString()),
    };
}

