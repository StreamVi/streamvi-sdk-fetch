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
exports.PlanRestreamNextItemToJSONTyped = exports.PlanRestreamNextItemToJSON = exports.PlanRestreamNextItemFromJSONTyped = exports.PlanRestreamNextItemFromJSON = exports.instanceOfPlanRestreamNextItem = void 0;
/**
 * Check if a given object implements the PlanRestreamNextItem interface.
 */
function instanceOfPlanRestreamNextItem(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('date_start' in value) || value['date_start'] === undefined)
        return false;
    return true;
}
exports.instanceOfPlanRestreamNextItem = instanceOfPlanRestreamNextItem;
function PlanRestreamNextItemFromJSON(json) {
    return PlanRestreamNextItemFromJSONTyped(json, false);
}
exports.PlanRestreamNextItemFromJSON = PlanRestreamNextItemFromJSON;
function PlanRestreamNextItemFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'channel_max': json['channel_max'] == null ? undefined : json['channel_max'],
        'bitrate_max': json['bitrate_max'] == null ? undefined : json['bitrate_max'],
        'date_start': (new Date(json['date_start'])),
    };
}
exports.PlanRestreamNextItemFromJSONTyped = PlanRestreamNextItemFromJSONTyped;
function PlanRestreamNextItemToJSON(json) {
    return PlanRestreamNextItemToJSONTyped(json, false);
}
exports.PlanRestreamNextItemToJSON = PlanRestreamNextItemToJSON;
function PlanRestreamNextItemToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'channel_max': value['channel_max'],
        'bitrate_max': value['bitrate_max'],
        'date_start': ((value['date_start']).toISOString()),
    };
}
exports.PlanRestreamNextItemToJSONTyped = PlanRestreamNextItemToJSONTyped;
