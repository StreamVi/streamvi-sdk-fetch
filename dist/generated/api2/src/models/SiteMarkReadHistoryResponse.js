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
exports.SiteMarkReadHistoryResponseToJSONTyped = exports.SiteMarkReadHistoryResponseToJSON = exports.SiteMarkReadHistoryResponseFromJSONTyped = exports.SiteMarkReadHistoryResponseFromJSON = exports.instanceOfSiteMarkReadHistoryResponse = void 0;
/**
 * Check if a given object implements the SiteMarkReadHistoryResponse interface.
 */
function instanceOfSiteMarkReadHistoryResponse(value) {
    if (!('count' in value) || value['count'] === undefined)
        return false;
    return true;
}
exports.instanceOfSiteMarkReadHistoryResponse = instanceOfSiteMarkReadHistoryResponse;
function SiteMarkReadHistoryResponseFromJSON(json) {
    return SiteMarkReadHistoryResponseFromJSONTyped(json, false);
}
exports.SiteMarkReadHistoryResponseFromJSON = SiteMarkReadHistoryResponseFromJSON;
function SiteMarkReadHistoryResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'count': json['count'],
    };
}
exports.SiteMarkReadHistoryResponseFromJSONTyped = SiteMarkReadHistoryResponseFromJSONTyped;
function SiteMarkReadHistoryResponseToJSON(json) {
    return SiteMarkReadHistoryResponseToJSONTyped(json, false);
}
exports.SiteMarkReadHistoryResponseToJSON = SiteMarkReadHistoryResponseToJSON;
function SiteMarkReadHistoryResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'count': value['count'],
    };
}
exports.SiteMarkReadHistoryResponseToJSONTyped = SiteMarkReadHistoryResponseToJSONTyped;
