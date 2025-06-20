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
exports.PlanRestreamFeatureItemToJSONTyped = exports.PlanRestreamFeatureItemToJSON = exports.PlanRestreamFeatureItemFromJSONTyped = exports.PlanRestreamFeatureItemFromJSON = exports.instanceOfPlanRestreamFeatureItem = exports.PlanRestreamFeatureItemNameEnum = void 0;
/**
 * @export
 */
exports.PlanRestreamFeatureItemNameEnum = {
    count_channel_max: 'count_channel_max',
    bitrate_max: 'bitrate_max',
    resolution: 'resolution',
    create_projects: 'create_projects',
    chat: 'chat',
    video: 'video',
    video_storage: 'video_storage',
    change_subject: 'change_subject',
    background_chat: 'background_chat',
    dedicated_server: 'dedicated_server',
    personal_manager: 'personal_manager'
};
/**
 * Check if a given object implements the PlanRestreamFeatureItem interface.
 */
function instanceOfPlanRestreamFeatureItem(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
exports.instanceOfPlanRestreamFeatureItem = instanceOfPlanRestreamFeatureItem;
function PlanRestreamFeatureItemFromJSON(json) {
    return PlanRestreamFeatureItemFromJSONTyped(json, false);
}
exports.PlanRestreamFeatureItemFromJSON = PlanRestreamFeatureItemFromJSON;
function PlanRestreamFeatureItemFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'unit': json['unit'] == null ? undefined : json['unit'],
    };
}
exports.PlanRestreamFeatureItemFromJSONTyped = PlanRestreamFeatureItemFromJSONTyped;
function PlanRestreamFeatureItemToJSON(json) {
    return PlanRestreamFeatureItemToJSONTyped(json, false);
}
exports.PlanRestreamFeatureItemToJSON = PlanRestreamFeatureItemToJSON;
function PlanRestreamFeatureItemToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'unit': value['unit'],
    };
}
exports.PlanRestreamFeatureItemToJSONTyped = PlanRestreamFeatureItemToJSONTyped;
