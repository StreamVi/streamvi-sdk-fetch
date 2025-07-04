"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionResponseToJSONTyped = exports.TransactionResponseToJSON = exports.TransactionResponseFromJSONTyped = exports.TransactionResponseFromJSON = exports.instanceOfTransactionResponse = void 0;
/**
 * Check if a given object implements the TransactionResponse interface.
 */
function instanceOfTransactionResponse(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('user_id' in value) || value['user_id'] === undefined)
        return false;
    if (!('payout_id' in value) || value['payout_id'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    if (!('sum' in value) || value['sum'] === undefined)
        return false;
    if (!('description' in value) || value['description'] === undefined)
        return false;
    if (!('code' in value) || value['code'] === undefined)
        return false;
    if (!('referral_id' in value) || value['referral_id'] === undefined)
        return false;
    if (!('date' in value) || value['date'] === undefined)
        return false;
    if (!('paymentId' in value) || value['paymentId'] === undefined)
        return false;
    if (!('payoutId' in value) || value['payoutId'] === undefined)
        return false;
    return true;
}
exports.instanceOfTransactionResponse = instanceOfTransactionResponse;
function TransactionResponseFromJSON(json) {
    return TransactionResponseFromJSONTyped(json, false);
}
exports.TransactionResponseFromJSON = TransactionResponseFromJSON;
function TransactionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'user_id': json['user_id'],
        'payout_id': json['payout_id'],
        'type': json['type'],
        'sum': json['sum'],
        'description': json['description'],
        'code': json['code'],
        'referral_id': json['referral_id'],
        'date': (new Date(json['date'])),
        'paymentId': json['paymentId'],
        'payoutId': json['payoutId'],
    };
}
exports.TransactionResponseFromJSONTyped = TransactionResponseFromJSONTyped;
function TransactionResponseToJSON(json) {
    return TransactionResponseToJSONTyped(json, false);
}
exports.TransactionResponseToJSON = TransactionResponseToJSON;
function TransactionResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'user_id': value['user_id'],
        'payout_id': value['payout_id'],
        'type': value['type'],
        'sum': value['sum'],
        'description': value['description'],
        'code': value['code'],
        'referral_id': value['referral_id'],
        'date': ((value['date']).toISOString()),
        'paymentId': value['paymentId'],
        'payoutId': value['payoutId'],
    };
}
exports.TransactionResponseToJSONTyped = TransactionResponseToJSONTyped;
