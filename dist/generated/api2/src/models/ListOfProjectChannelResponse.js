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
exports.ListOfProjectChannelResponseToJSONTyped = exports.ListOfProjectChannelResponseToJSON = exports.ListOfProjectChannelResponseFromJSONTyped = exports.ListOfProjectChannelResponseFromJSON = exports.instanceOfListOfProjectChannelResponse = void 0;
const ProjectChannelResponse_1 = require("./ProjectChannelResponse");
/**
 * Check if a given object implements the ListOfProjectChannelResponse interface.
 */
function instanceOfListOfProjectChannelResponse(value) {
    if (!('results' in value) || value['results'] === undefined)
        return false;
    return true;
}
exports.instanceOfListOfProjectChannelResponse = instanceOfListOfProjectChannelResponse;
function ListOfProjectChannelResponseFromJSON(json) {
    return ListOfProjectChannelResponseFromJSONTyped(json, false);
}
exports.ListOfProjectChannelResponseFromJSON = ListOfProjectChannelResponseFromJSON;
function ListOfProjectChannelResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'results': (json['results'].map(ProjectChannelResponse_1.ProjectChannelResponseFromJSON)),
    };
}
exports.ListOfProjectChannelResponseFromJSONTyped = ListOfProjectChannelResponseFromJSONTyped;
function ListOfProjectChannelResponseToJSON(json) {
    return ListOfProjectChannelResponseToJSONTyped(json, false);
}
exports.ListOfProjectChannelResponseToJSON = ListOfProjectChannelResponseToJSON;
function ListOfProjectChannelResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'results': (value['results'].map(ProjectChannelResponse_1.ProjectChannelResponseToJSON)),
    };
}
exports.ListOfProjectChannelResponseToJSONTyped = ListOfProjectChannelResponseToJSONTyped;
