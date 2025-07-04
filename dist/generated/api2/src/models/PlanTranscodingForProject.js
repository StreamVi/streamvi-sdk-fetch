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
exports.PlanTranscodingForProjectToJSONTyped = exports.PlanTranscodingForProjectToJSON = exports.PlanTranscodingForProjectFromJSONTyped = exports.PlanTranscodingForProjectFromJSON = exports.instanceOfPlanTranscodingForProject = void 0;
const PlanTranscodingItem_1 = require("./PlanTranscodingItem");
/**
 * Check if a given object implements the PlanTranscodingForProject interface.
 */
function instanceOfPlanTranscodingForProject(value) {
    if (!('before' in value) || value['before'] === undefined)
        return false;
    if (!('current' in value) || value['current'] === undefined)
        return false;
    if (!('next' in value) || value['next'] === undefined)
        return false;
    return true;
}
exports.instanceOfPlanTranscodingForProject = instanceOfPlanTranscodingForProject;
function PlanTranscodingForProjectFromJSON(json) {
    return PlanTranscodingForProjectFromJSONTyped(json, false);
}
exports.PlanTranscodingForProjectFromJSON = PlanTranscodingForProjectFromJSON;
function PlanTranscodingForProjectFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'before': (0, PlanTranscodingItem_1.PlanTranscodingItemFromJSON)(json['before']),
        'current': (0, PlanTranscodingItem_1.PlanTranscodingItemFromJSON)(json['current']),
        'next': (0, PlanTranscodingItem_1.PlanTranscodingItemFromJSON)(json['next']),
    };
}
exports.PlanTranscodingForProjectFromJSONTyped = PlanTranscodingForProjectFromJSONTyped;
function PlanTranscodingForProjectToJSON(json) {
    return PlanTranscodingForProjectToJSONTyped(json, false);
}
exports.PlanTranscodingForProjectToJSON = PlanTranscodingForProjectToJSON;
function PlanTranscodingForProjectToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'before': (0, PlanTranscodingItem_1.PlanTranscodingItemToJSON)(value['before']),
        'current': (0, PlanTranscodingItem_1.PlanTranscodingItemToJSON)(value['current']),
        'next': (0, PlanTranscodingItem_1.PlanTranscodingItemToJSON)(value['next']),
    };
}
exports.PlanTranscodingForProjectToJSONTyped = PlanTranscodingForProjectToJSONTyped;
