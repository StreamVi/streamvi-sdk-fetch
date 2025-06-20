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
 * @interface PaySystemListResponse
 */
export interface PaySystemListResponse {
    /**
     * Id
     * @type {number}
     * @memberof PaySystemListResponse
     */
    pay_system_id: number;
    /**
     * Name
     * @type {string}
     * @memberof PaySystemListResponse
     */
    name: string;
    /**
     * Min amount
     * @type {number}
     * @memberof PaySystemListResponse
     */
    min_amount: number;
    /**
     * Max amount
     * @type {number}
     * @memberof PaySystemListResponse
     */
    max_amount: number;
    /**
     * Currency
     * @type {string}
     * @memberof PaySystemListResponse
     */
    currency: PaySystemListResponseCurrencyEnum;
    /**
     * The possibility of annual replenishment
     * @type {number}
     * @memberof PaySystemListResponse
     */
    annual: number;
    /**
     * The ability to replenish the balance
     * @type {number}
     * @memberof PaySystemListResponse
     */
    topup: number;
    /**
     * The possibility of recurrent payment
     * @type {number}
     * @memberof PaySystemListResponse
     */
    recurrent: number;
    /**
     * Description
     * @type {string}
     * @memberof PaySystemListResponse
     */
    description: string;
}


/**
 * @export
 */
export const PaySystemListResponseCurrencyEnum = {
    rub: 'rub',
    usd: 'usd'
} as const;
export type PaySystemListResponseCurrencyEnum = typeof PaySystemListResponseCurrencyEnum[keyof typeof PaySystemListResponseCurrencyEnum];


/**
 * Check if a given object implements the PaySystemListResponse interface.
 */
export function instanceOfPaySystemListResponse(value: object): value is PaySystemListResponse {
    if (!('pay_system_id' in value) || value['pay_system_id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('min_amount' in value) || value['min_amount'] === undefined) return false;
    if (!('max_amount' in value) || value['max_amount'] === undefined) return false;
    if (!('currency' in value) || value['currency'] === undefined) return false;
    if (!('annual' in value) || value['annual'] === undefined) return false;
    if (!('topup' in value) || value['topup'] === undefined) return false;
    if (!('recurrent' in value) || value['recurrent'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    return true;
}

export function PaySystemListResponseFromJSON(json: any): PaySystemListResponse {
    return PaySystemListResponseFromJSONTyped(json, false);
}

export function PaySystemListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaySystemListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'pay_system_id': json['pay_system_id'],
        'name': json['name'],
        'min_amount': json['min_amount'],
        'max_amount': json['max_amount'],
        'currency': json['currency'],
        'annual': json['annual'],
        'topup': json['topup'],
        'recurrent': json['recurrent'],
        'description': json['description'],
    };
}

export function PaySystemListResponseToJSON(json: any): PaySystemListResponse {
    return PaySystemListResponseToJSONTyped(json, false);
}

export function PaySystemListResponseToJSONTyped(value?: PaySystemListResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'pay_system_id': value['pay_system_id'],
        'name': value['name'],
        'min_amount': value['min_amount'],
        'max_amount': value['max_amount'],
        'currency': value['currency'],
        'annual': value['annual'],
        'topup': value['topup'],
        'recurrent': value['recurrent'],
        'description': value['description'],
    };
}

