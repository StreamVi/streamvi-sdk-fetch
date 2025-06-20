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
import type { MoneyFlowBalanceTypeValuesResponse } from './MoneyFlowBalanceTypeValuesResponse';
import {
    MoneyFlowBalanceTypeValuesResponseFromJSON,
    MoneyFlowBalanceTypeValuesResponseFromJSONTyped,
    MoneyFlowBalanceTypeValuesResponseToJSON,
    MoneyFlowBalanceTypeValuesResponseToJSONTyped,
} from './MoneyFlowBalanceTypeValuesResponse';

/**
 * 
 * @export
 * @interface BalanceForPayResponse
 */
export interface BalanceForPayResponse {
    /**
     * Balance
     * @type {number}
     * @memberof BalanceForPayResponse
     */
    balance: number;
    /**
     * Currency
     * @type {string}
     * @memberof BalanceForPayResponse
     */
    currency: BalanceForPayResponseCurrencyEnum;
    /**
     * Allowed balances
     * @type {Array<string>}
     * @memberof BalanceForPayResponse
     */
    balances_allow: Array<BalanceForPayResponseBalancesAllowEnum>;
    /**
     * Balances values
     * @type {MoneyFlowBalanceTypeValuesResponse}
     * @memberof BalanceForPayResponse
     */
    balances_values: MoneyFlowBalanceTypeValuesResponse;
}


/**
 * @export
 */
export const BalanceForPayResponseCurrencyEnum = {
    rub: 'rub',
    usd: 'usd'
} as const;
export type BalanceForPayResponseCurrencyEnum = typeof BalanceForPayResponseCurrencyEnum[keyof typeof BalanceForPayResponseCurrencyEnum];

/**
 * @export
 */
export const BalanceForPayResponseBalancesAllowEnum = {
    bonus: 'bonus',
    payment: 'payment',
    profit: 'profit'
} as const;
export type BalanceForPayResponseBalancesAllowEnum = typeof BalanceForPayResponseBalancesAllowEnum[keyof typeof BalanceForPayResponseBalancesAllowEnum];


/**
 * Check if a given object implements the BalanceForPayResponse interface.
 */
export function instanceOfBalanceForPayResponse(value: object): value is BalanceForPayResponse {
    if (!('balance' in value) || value['balance'] === undefined) return false;
    if (!('currency' in value) || value['currency'] === undefined) return false;
    if (!('balances_allow' in value) || value['balances_allow'] === undefined) return false;
    if (!('balances_values' in value) || value['balances_values'] === undefined) return false;
    return true;
}

export function BalanceForPayResponseFromJSON(json: any): BalanceForPayResponse {
    return BalanceForPayResponseFromJSONTyped(json, false);
}

export function BalanceForPayResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceForPayResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'balance': json['balance'],
        'currency': json['currency'],
        'balances_allow': json['balances_allow'],
        'balances_values': MoneyFlowBalanceTypeValuesResponseFromJSON(json['balances_values']),
    };
}

export function BalanceForPayResponseToJSON(json: any): BalanceForPayResponse {
    return BalanceForPayResponseToJSONTyped(json, false);
}

export function BalanceForPayResponseToJSONTyped(value?: BalanceForPayResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'balance': value['balance'],
        'currency': value['currency'],
        'balances_allow': value['balances_allow'],
        'balances_values': MoneyFlowBalanceTypeValuesResponseToJSON(value['balances_values']),
    };
}

