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
exports.RtmpServerPlatformQualityToJSONTyped = exports.RtmpServerPlatformQualityToJSON = exports.RtmpServerPlatformQualityFromJSONTyped = exports.RtmpServerPlatformQualityFromJSON = exports.instanceOfRtmpServerPlatformQuality = exports.RtmpServerPlatformQualityStatusEnum = void 0;
/**
 * @export
 */
exports.RtmpServerPlatformQualityStatusEnum = {
    good: 'good',
    problem: 'problem',
    bad: 'bad'
};
/**
 * Check if a given object implements the RtmpServerPlatformQuality interface.
 */
function instanceOfRtmpServerPlatformQuality(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('quality' in value) || value['quality'] === undefined)
        return false;
    if (!('title' in value) || value['title'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    if (!('reconnect' in value) || value['reconnect'] === undefined)
        return false;
    return true;
}
exports.instanceOfRtmpServerPlatformQuality = instanceOfRtmpServerPlatformQuality;
function RtmpServerPlatformQualityFromJSON(json) {
    return RtmpServerPlatformQualityFromJSONTyped(json, false);
}
exports.RtmpServerPlatformQualityFromJSON = RtmpServerPlatformQualityFromJSON;
function RtmpServerPlatformQualityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'quality': json['quality'],
        'title': json['title'],
        'status': json['status'],
        'reconnect': json['reconnect'],
    };
}
exports.RtmpServerPlatformQualityFromJSONTyped = RtmpServerPlatformQualityFromJSONTyped;
function RtmpServerPlatformQualityToJSON(json) {
    return RtmpServerPlatformQualityToJSONTyped(json, false);
}
exports.RtmpServerPlatformQualityToJSON = RtmpServerPlatformQualityToJSON;
function RtmpServerPlatformQualityToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'quality': value['quality'],
        'title': value['title'],
        'status': value['status'],
        'reconnect': value['reconnect'],
    };
}
exports.RtmpServerPlatformQualityToJSONTyped = RtmpServerPlatformQualityToJSONTyped;
