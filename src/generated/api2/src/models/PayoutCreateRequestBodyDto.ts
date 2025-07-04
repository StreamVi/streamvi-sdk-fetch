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
 * @interface PayoutCreateRequestBodyDto
 */
export interface PayoutCreateRequestBodyDto {
    /**
     * Version
     * @type {string}
     * @memberof PayoutCreateRequestBodyDto
     */
    v: PayoutCreateRequestBodyDtoVEnum;
    /**
     * Current language
     * @type {string}
     * @memberof PayoutCreateRequestBodyDto
     */
    language: PayoutCreateRequestBodyDtoLanguageEnum;
    /**
     * Payout system account
     * @type {number}
     * @memberof PayoutCreateRequestBodyDto
     */
    payout_system_account_id: number;
    /**
     * Project id
     * @type {number}
     * @memberof PayoutCreateRequestBodyDto
     */
    project_id: number;
    /**
     * Amount
     * @type {number}
     * @memberof PayoutCreateRequestBodyDto
     */
    amount: number;
    /**
     * Wallet value
     * @type {string}
     * @memberof PayoutCreateRequestBodyDto
     */
    wallet_value: string;
}


/**
 * @export
 */
export const PayoutCreateRequestBodyDtoVEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
} as const;
export type PayoutCreateRequestBodyDtoVEnum = typeof PayoutCreateRequestBodyDtoVEnum[keyof typeof PayoutCreateRequestBodyDtoVEnum];

/**
 * @export
 */
export const PayoutCreateRequestBodyDtoLanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type PayoutCreateRequestBodyDtoLanguageEnum = typeof PayoutCreateRequestBodyDtoLanguageEnum[keyof typeof PayoutCreateRequestBodyDtoLanguageEnum];


/**
 * Check if a given object implements the PayoutCreateRequestBodyDto interface.
 */
export function instanceOfPayoutCreateRequestBodyDto(value: object): value is PayoutCreateRequestBodyDto {
    if (!('v' in value) || value['v'] === undefined) return false;
    if (!('language' in value) || value['language'] === undefined) return false;
    if (!('payout_system_account_id' in value) || value['payout_system_account_id'] === undefined) return false;
    if (!('project_id' in value) || value['project_id'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('wallet_value' in value) || value['wallet_value'] === undefined) return false;
    return true;
}

export function PayoutCreateRequestBodyDtoFromJSON(json: any): PayoutCreateRequestBodyDto {
    return PayoutCreateRequestBodyDtoFromJSONTyped(json, false);
}

export function PayoutCreateRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayoutCreateRequestBodyDto {
    if (json == null) {
        return json;
    }
    return {
        
        'v': json['v'],
        'language': json['language'],
        'payout_system_account_id': json['payout_system_account_id'],
        'project_id': json['project_id'],
        'amount': json['amount'],
        'wallet_value': json['wallet_value'],
    };
}

export function PayoutCreateRequestBodyDtoToJSON(json: any): PayoutCreateRequestBodyDto {
    return PayoutCreateRequestBodyDtoToJSONTyped(json, false);
}

export function PayoutCreateRequestBodyDtoToJSONTyped(value?: PayoutCreateRequestBodyDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'v': value['v'],
        'language': value['language'],
        'payout_system_account_id': value['payout_system_account_id'],
        'project_id': value['project_id'],
        'amount': value['amount'],
        'wallet_value': value['wallet_value'],
    };
}

