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
exports.SitePromoCheckResponseToJSONTyped = exports.SitePromoCheckResponseToJSON = exports.SitePromoCheckResponseFromJSONTyped = exports.SitePromoCheckResponseFromJSON = exports.instanceOfSitePromoCheckResponse = void 0;
/**
 * Check if a given object implements the SitePromoCheckResponse interface.
 */
function instanceOfSitePromoCheckResponse(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
exports.instanceOfSitePromoCheckResponse = instanceOfSitePromoCheckResponse;
function SitePromoCheckResponseFromJSON(json) {
    return SitePromoCheckResponseFromJSONTyped(json, false);
}
exports.SitePromoCheckResponseFromJSON = SitePromoCheckResponseFromJSON;
function SitePromoCheckResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'id': json['id'],
        'type': json['type'],
    };
}
exports.SitePromoCheckResponseFromJSONTyped = SitePromoCheckResponseFromJSONTyped;
function SitePromoCheckResponseToJSON(json) {
    return SitePromoCheckResponseToJSONTyped(json, false);
}
exports.SitePromoCheckResponseToJSON = SitePromoCheckResponseToJSON;
function SitePromoCheckResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'id': value['id'],
        'type': value['type'],
    };
}
exports.SitePromoCheckResponseToJSONTyped = SitePromoCheckResponseToJSONTyped;
