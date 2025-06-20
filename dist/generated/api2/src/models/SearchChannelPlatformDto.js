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
exports.SearchChannelPlatformDtoToJSONTyped = exports.SearchChannelPlatformDtoToJSON = exports.SearchChannelPlatformDtoFromJSONTyped = exports.SearchChannelPlatformDtoFromJSON = exports.instanceOfSearchChannelPlatformDto = exports.SearchChannelPlatformDtoExtensionEnum = void 0;
/**
 * @export
 */
exports.SearchChannelPlatformDtoExtensionEnum = {
    png: 'png',
    svg: 'svg'
};
/**
 * Check if a given object implements the SearchChannelPlatformDto interface.
 */
function instanceOfSearchChannelPlatformDto(value) {
    if (!('title' in value) || value['title'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    if (!('url' in value) || value['url'] === undefined)
        return false;
    if (!('extension' in value) || value['extension'] === undefined)
        return false;
    if (!('edit_name' in value) || value['edit_name'] === undefined)
        return false;
    return true;
}
exports.instanceOfSearchChannelPlatformDto = instanceOfSearchChannelPlatformDto;
function SearchChannelPlatformDtoFromJSON(json) {
    return SearchChannelPlatformDtoFromJSONTyped(json, false);
}
exports.SearchChannelPlatformDtoFromJSON = SearchChannelPlatformDtoFromJSON;
function SearchChannelPlatformDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'title': json['title'],
        'type': json['type'],
        'url': json['url'],
        'extension': json['extension'],
        'edit_name': json['edit_name'],
    };
}
exports.SearchChannelPlatformDtoFromJSONTyped = SearchChannelPlatformDtoFromJSONTyped;
function SearchChannelPlatformDtoToJSON(json) {
    return SearchChannelPlatformDtoToJSONTyped(json, false);
}
exports.SearchChannelPlatformDtoToJSON = SearchChannelPlatformDtoToJSON;
function SearchChannelPlatformDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'title': value['title'],
        'type': value['type'],
        'url': value['url'],
        'extension': value['extension'],
        'edit_name': value['edit_name'],
    };
}
exports.SearchChannelPlatformDtoToJSONTyped = SearchChannelPlatformDtoToJSONTyped;
