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
exports.MethodBroadcastRestreamItemResponseToJSONTyped = exports.MethodBroadcastRestreamItemResponseToJSON = exports.MethodBroadcastRestreamItemResponseFromJSONTyped = exports.MethodBroadcastRestreamItemResponseFromJSON = exports.instanceOfMethodBroadcastRestreamItemResponse = void 0;
/**
 * Check if a given object implements the MethodBroadcastRestreamItemResponse interface.
 */
function instanceOfMethodBroadcastRestreamItemResponse(value) {
    if (!('restream_id' in value) || value['restream_id'] === undefined)
        return false;
    if (!('channel_id' in value) || value['channel_id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('image' in value) || value['image'] === undefined)
        return false;
    if (!('platform' in value) || value['platform'] === undefined)
        return false;
    if (!('viewers' in value) || value['viewers'] === undefined)
        return false;
    return true;
}
exports.instanceOfMethodBroadcastRestreamItemResponse = instanceOfMethodBroadcastRestreamItemResponse;
function MethodBroadcastRestreamItemResponseFromJSON(json) {
    return MethodBroadcastRestreamItemResponseFromJSONTyped(json, false);
}
exports.MethodBroadcastRestreamItemResponseFromJSON = MethodBroadcastRestreamItemResponseFromJSON;
function MethodBroadcastRestreamItemResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'restream_id': json['restream_id'],
        'channel_id': json['channel_id'],
        'name': json['name'],
        'image': json['image'],
        'platform': json['platform'],
        'viewers': json['viewers'],
    };
}
exports.MethodBroadcastRestreamItemResponseFromJSONTyped = MethodBroadcastRestreamItemResponseFromJSONTyped;
function MethodBroadcastRestreamItemResponseToJSON(json) {
    return MethodBroadcastRestreamItemResponseToJSONTyped(json, false);
}
exports.MethodBroadcastRestreamItemResponseToJSON = MethodBroadcastRestreamItemResponseToJSON;
function MethodBroadcastRestreamItemResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'restream_id': value['restream_id'],
        'channel_id': value['channel_id'],
        'name': value['name'],
        'image': value['image'],
        'platform': value['platform'],
        'viewers': value['viewers'],
    };
}
exports.MethodBroadcastRestreamItemResponseToJSONTyped = MethodBroadcastRestreamItemResponseToJSONTyped;
