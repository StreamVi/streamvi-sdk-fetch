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
exports.SiteUpdateOptionsVkVideoLiveRequestToJSONTyped = exports.SiteUpdateOptionsVkVideoLiveRequestToJSON = exports.SiteUpdateOptionsVkVideoLiveRequestFromJSONTyped = exports.SiteUpdateOptionsVkVideoLiveRequestFromJSON = exports.instanceOfSiteUpdateOptionsVkVideoLiveRequest = exports.SiteUpdateOptionsVkVideoLiveRequestLanguageEnum = exports.SiteUpdateOptionsVkVideoLiveRequestVEnum = void 0;
/**
 * @export
 */
exports.SiteUpdateOptionsVkVideoLiveRequestVEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
/**
 * @export
 */
exports.SiteUpdateOptionsVkVideoLiveRequestLanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
};
/**
 * Check if a given object implements the SiteUpdateOptionsVkVideoLiveRequest interface.
 */
function instanceOfSiteUpdateOptionsVkVideoLiveRequest(value) {
    if (!('v' in value) || value['v'] === undefined)
        return false;
    if (!('language' in value) || value['language'] === undefined)
        return false;
    if (!('project_id' in value) || value['project_id'] === undefined)
        return false;
    if (!('channel_id' in value) || value['channel_id'] === undefined)
        return false;
    if (!('title' in value) || value['title'] === undefined)
        return false;
    return true;
}
exports.instanceOfSiteUpdateOptionsVkVideoLiveRequest = instanceOfSiteUpdateOptionsVkVideoLiveRequest;
function SiteUpdateOptionsVkVideoLiveRequestFromJSON(json) {
    return SiteUpdateOptionsVkVideoLiveRequestFromJSONTyped(json, false);
}
exports.SiteUpdateOptionsVkVideoLiveRequestFromJSON = SiteUpdateOptionsVkVideoLiveRequestFromJSON;
function SiteUpdateOptionsVkVideoLiveRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'v': json['v'],
        'language': json['language'],
        'project_id': json['project_id'],
        'channel_id': json['channel_id'],
        'title': json['title'],
        'category_id': json['category_id'] == null ? undefined : json['category_id'],
        'category_name': json['category_name'] == null ? undefined : json['category_name'],
    };
}
exports.SiteUpdateOptionsVkVideoLiveRequestFromJSONTyped = SiteUpdateOptionsVkVideoLiveRequestFromJSONTyped;
function SiteUpdateOptionsVkVideoLiveRequestToJSON(json) {
    return SiteUpdateOptionsVkVideoLiveRequestToJSONTyped(json, false);
}
exports.SiteUpdateOptionsVkVideoLiveRequestToJSON = SiteUpdateOptionsVkVideoLiveRequestToJSON;
function SiteUpdateOptionsVkVideoLiveRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'v': value['v'],
        'language': value['language'],
        'project_id': value['project_id'],
        'channel_id': value['channel_id'],
        'title': value['title'],
        'category_id': value['category_id'],
        'category_name': value['category_name'],
    };
}
exports.SiteUpdateOptionsVkVideoLiveRequestToJSONTyped = SiteUpdateOptionsVkVideoLiveRequestToJSONTyped;
