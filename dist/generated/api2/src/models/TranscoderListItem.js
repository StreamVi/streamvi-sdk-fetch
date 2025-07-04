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
exports.TranscoderListItemToJSONTyped = exports.TranscoderListItemToJSON = exports.TranscoderListItemFromJSONTyped = exports.TranscoderListItemFromJSON = exports.instanceOfTranscoderListItem = exports.TranscoderListItemVideoCodecEnum = exports.TranscoderListItemStatusEnum = void 0;
const TranscoderChannelItem_1 = require("./TranscoderChannelItem");
/**
 * @export
 */
exports.TranscoderListItemStatusEnum = {
    active: 'active',
    inactive: 'inactive'
};
/**
 * @export
 */
exports.TranscoderListItemVideoCodecEnum = {
    h264: 'h264',
    hevc: 'hevc'
};
/**
 * Check if a given object implements the TranscoderListItem interface.
 */
function instanceOfTranscoderListItem(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    if (!('videoCodec' in value) || value['videoCodec'] === undefined)
        return false;
    if (!('channels' in value) || value['channels'] === undefined)
        return false;
    return true;
}
exports.instanceOfTranscoderListItem = instanceOfTranscoderListItem;
function TranscoderListItemFromJSON(json) {
    return TranscoderListItemFromJSONTyped(json, false);
}
exports.TranscoderListItemFromJSON = TranscoderListItemFromJSON;
function TranscoderListItemFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'createdAt': json['createdAt'],
        'fps': json['fps'] == null ? undefined : json['fps'],
        'vBitrate': json['vBitrate'] == null ? undefined : json['vBitrate'],
        'aBitrate': json['aBitrate'] == null ? undefined : json['aBitrate'],
        'width': json['width'] == null ? undefined : json['width'],
        'height': json['height'] == null ? undefined : json['height'],
        'rotation': json['rotation'] == null ? undefined : json['rotation'],
        'bFrames': json['bFrames'] == null ? undefined : json['bFrames'],
        'status': json['status'],
        'videoCodec': json['videoCodec'],
        'channels': (json['channels'].map(TranscoderChannelItem_1.TranscoderChannelItemFromJSON)),
    };
}
exports.TranscoderListItemFromJSONTyped = TranscoderListItemFromJSONTyped;
function TranscoderListItemToJSON(json) {
    return TranscoderListItemToJSONTyped(json, false);
}
exports.TranscoderListItemToJSON = TranscoderListItemToJSON;
function TranscoderListItemToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
        'createdAt': value['createdAt'],
        'fps': value['fps'],
        'vBitrate': value['vBitrate'],
        'aBitrate': value['aBitrate'],
        'width': value['width'],
        'height': value['height'],
        'rotation': value['rotation'],
        'bFrames': value['bFrames'],
        'status': value['status'],
        'videoCodec': value['videoCodec'],
        'channels': (value['channels'].map(TranscoderChannelItem_1.TranscoderChannelItemToJSON)),
    };
}
exports.TranscoderListItemToJSONTyped = TranscoderListItemToJSONTyped;
