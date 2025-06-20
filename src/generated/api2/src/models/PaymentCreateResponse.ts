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
 * @interface PaymentCreateResponse
 */
export interface PaymentCreateResponse {
    /**
     * Payment Id
     * @type {number}
     * @memberof PaymentCreateResponse
     */
    payment_id: number;
    /**
     * Pay system name
     * @type {string}
     * @memberof PaymentCreateResponse
     */
    pay_name: string;
    /**
     * Pay system id
     * @type {string}
     * @memberof PaymentCreateResponse
     */
    pay_id?: string;
    /**
     * Pay system key
     * @type {string}
     * @memberof PaymentCreateResponse
     */
    pay_key?: string;
}

/**
 * Check if a given object implements the PaymentCreateResponse interface.
 */
export function instanceOfPaymentCreateResponse(value: object): value is PaymentCreateResponse {
    if (!('payment_id' in value) || value['payment_id'] === undefined) return false;
    if (!('pay_name' in value) || value['pay_name'] === undefined) return false;
    return true;
}

export function PaymentCreateResponseFromJSON(json: any): PaymentCreateResponse {
    return PaymentCreateResponseFromJSONTyped(json, false);
}

export function PaymentCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentCreateResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'payment_id': json['payment_id'],
        'pay_name': json['pay_name'],
        'pay_id': json['pay_id'] == null ? undefined : json['pay_id'],
        'pay_key': json['pay_key'] == null ? undefined : json['pay_key'],
    };
}

export function PaymentCreateResponseToJSON(json: any): PaymentCreateResponse {
    return PaymentCreateResponseToJSONTyped(json, false);
}

export function PaymentCreateResponseToJSONTyped(value?: PaymentCreateResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'payment_id': value['payment_id'],
        'pay_name': value['pay_name'],
        'pay_id': value['pay_id'],
        'pay_key': value['pay_key'],
    };
}

