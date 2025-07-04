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
exports.ProjectInfoTranscodingResponseToJSONTyped = exports.ProjectInfoTranscodingResponseToJSON = exports.ProjectInfoTranscodingResponseFromJSONTyped = exports.ProjectInfoTranscodingResponseFromJSON = exports.instanceOfProjectInfoTranscodingResponse = void 0;
const PlanTranscodingResponse_1 = require("./PlanTranscodingResponse");
const PlanTranscoding2UserItemResponse_1 = require("./PlanTranscoding2UserItemResponse");
/**
 * Check if a given object implements the ProjectInfoTranscodingResponse interface.
 */
function instanceOfProjectInfoTranscodingResponse(value) {
    if (!('plan2user' in value) || value['plan2user'] === undefined)
        return false;
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
exports.instanceOfProjectInfoTranscodingResponse = instanceOfProjectInfoTranscodingResponse;
function ProjectInfoTranscodingResponseFromJSON(json) {
    return ProjectInfoTranscodingResponseFromJSONTyped(json, false);
}
exports.ProjectInfoTranscodingResponseFromJSON = ProjectInfoTranscodingResponseFromJSON;
function ProjectInfoTranscodingResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'plan2user': (0, PlanTranscoding2UserItemResponse_1.PlanTranscoding2UserItemResponseFromJSON)(json['plan2user']),
        'data': (0, PlanTranscodingResponse_1.PlanTranscodingResponseFromJSON)(json['data']),
    };
}
exports.ProjectInfoTranscodingResponseFromJSONTyped = ProjectInfoTranscodingResponseFromJSONTyped;
function ProjectInfoTranscodingResponseToJSON(json) {
    return ProjectInfoTranscodingResponseToJSONTyped(json, false);
}
exports.ProjectInfoTranscodingResponseToJSON = ProjectInfoTranscodingResponseToJSON;
function ProjectInfoTranscodingResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'plan2user': (0, PlanTranscoding2UserItemResponse_1.PlanTranscoding2UserItemResponseToJSON)(value['plan2user']),
        'data': (0, PlanTranscodingResponse_1.PlanTranscodingResponseToJSON)(value['data']),
    };
}
exports.ProjectInfoTranscodingResponseToJSONTyped = ProjectInfoTranscodingResponseToJSONTyped;
