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
exports.ServerUrlToJSONTyped = exports.ServerUrlToJSON = exports.ServerUrlFromJSONTyped = exports.ServerUrlFromJSON = exports.instanceOfServerUrl = void 0;
const ServerUrlValue_1 = require("./ServerUrlValue");
/**
 * Check if a given object implements the ServerUrl interface.
 */
function instanceOfServerUrl(value) {
    return true;
}
exports.instanceOfServerUrl = instanceOfServerUrl;
function ServerUrlFromJSON(json) {
    return ServerUrlFromJSONTyped(json, false);
}
exports.ServerUrlFromJSON = ServerUrlFromJSON;
function ServerUrlFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'rtmp': json['rtmp'] == null ? undefined : (0, ServerUrlValue_1.ServerUrlValueFromJSON)(json['rtmp']),
        'srt': json['srt'] == null ? undefined : (0, ServerUrlValue_1.ServerUrlValueFromJSON)(json['srt']),
    };
}
exports.ServerUrlFromJSONTyped = ServerUrlFromJSONTyped;
function ServerUrlToJSON(json) {
    return ServerUrlToJSONTyped(json, false);
}
exports.ServerUrlToJSON = ServerUrlToJSON;
function ServerUrlToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'rtmp': (0, ServerUrlValue_1.ServerUrlValueToJSON)(value['rtmp']),
        'srt': (0, ServerUrlValue_1.ServerUrlValueToJSON)(value['srt']),
    };
}
exports.ServerUrlToJSONTyped = ServerUrlToJSONTyped;
