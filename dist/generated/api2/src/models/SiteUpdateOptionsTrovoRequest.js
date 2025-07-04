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
exports.SiteUpdateOptionsTrovoRequestToJSONTyped = exports.SiteUpdateOptionsTrovoRequestToJSON = exports.SiteUpdateOptionsTrovoRequestFromJSONTyped = exports.SiteUpdateOptionsTrovoRequestFromJSON = exports.instanceOfSiteUpdateOptionsTrovoRequest = exports.SiteUpdateOptionsTrovoRequestLangEnum = exports.SiteUpdateOptionsTrovoRequestAudienceEnum = exports.SiteUpdateOptionsTrovoRequestLanguageEnum = exports.SiteUpdateOptionsTrovoRequestVEnum = void 0;
/**
 * @export
 */
exports.SiteUpdateOptionsTrovoRequestVEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
/**
 * @export
 */
exports.SiteUpdateOptionsTrovoRequestLanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
};
/**
 * @export
 */
exports.SiteUpdateOptionsTrovoRequestAudienceEnum = {
    CHANNEL_AUDIENCE_TYPE_FAMILYFRIENDLY: 'CHANNEL_AUDIENCE_TYPE_FAMILYFRIENDLY',
    CHANNEL_AUDIENCE_TYPE_TEEN: 'CHANNEL_AUDIENCE_TYPE_TEEN',
    CHANNEL_AUDIENCE_TYPE_EIGHTEENPLUS: 'CHANNEL_AUDIENCE_TYPE_EIGHTEENPLUS'
};
/**
 * @export
 */
exports.SiteUpdateOptionsTrovoRequestLangEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
};
/**
 * Check if a given object implements the SiteUpdateOptionsTrovoRequest interface.
 */
function instanceOfSiteUpdateOptionsTrovoRequest(value) {
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
exports.instanceOfSiteUpdateOptionsTrovoRequest = instanceOfSiteUpdateOptionsTrovoRequest;
function SiteUpdateOptionsTrovoRequestFromJSON(json) {
    return SiteUpdateOptionsTrovoRequestFromJSONTyped(json, false);
}
exports.SiteUpdateOptionsTrovoRequestFromJSON = SiteUpdateOptionsTrovoRequestFromJSON;
function SiteUpdateOptionsTrovoRequestFromJSONTyped(json, ignoreDiscriminator) {
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
        'audience': json['audience'] == null ? undefined : json['audience'],
        'lang': json['lang'] == null ? undefined : json['lang'],
    };
}
exports.SiteUpdateOptionsTrovoRequestFromJSONTyped = SiteUpdateOptionsTrovoRequestFromJSONTyped;
function SiteUpdateOptionsTrovoRequestToJSON(json) {
    return SiteUpdateOptionsTrovoRequestToJSONTyped(json, false);
}
exports.SiteUpdateOptionsTrovoRequestToJSON = SiteUpdateOptionsTrovoRequestToJSON;
function SiteUpdateOptionsTrovoRequestToJSONTyped(value, ignoreDiscriminator = false) {
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
        'audience': value['audience'],
        'lang': value['lang'],
    };
}
exports.SiteUpdateOptionsTrovoRequestToJSONTyped = SiteUpdateOptionsTrovoRequestToJSONTyped;
