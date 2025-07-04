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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ProjectHistoryResponse
 */
export interface ProjectHistoryResponse {
    /**
     * Primary key
     * @type {number}
     * @memberof ProjectHistoryResponse
     */
    id: number;
    /**
     * Action
     * @type {string}
     * @memberof ProjectHistoryResponse
     */
    action: ProjectHistoryResponseActionEnum;
    /**
     * Project id
     * @type {number}
     * @memberof ProjectHistoryResponse
     */
    project_id: number;
    /**
     * User id
     * @type {number}
     * @memberof ProjectHistoryResponse
     */
    user_id: number;
    /**
     * Group id
     * @type {number}
     * @memberof ProjectHistoryResponse
     */
    group_id: number;
    /**
     * Date
     * @type {Date}
     * @memberof ProjectHistoryResponse
     */
    date?: Date;
}


/**
 * @export
 */
export const ProjectHistoryResponseActionEnum = {
    project_channel_invite_add: 'project_channel_invite_add',
    project_channel_invite_del: 'project_channel_invite_del',
    project_channel_invite_accept: 'project_channel_invite_accept',
    project_channel_invite_decline: 'project_channel_invite_decline',
    user_project_invite_add: 'user_project_invite_add',
    user_project_invite_del: 'user_project_invite_del',
    user_project_invite_accept: 'user_project_invite_accept',
    user_project_invite_decline: 'user_project_invite_decline',
    user_project_add: 'user_project_add',
    user_project_del: 'user_project_del',
    user_project_change: 'user_project_change',
    project_channel_add: 'project_channel_add',
    project_channel_del: 'project_channel_del',
    project_channel_change: 'project_channel_change'
} as const;
export type ProjectHistoryResponseActionEnum = typeof ProjectHistoryResponseActionEnum[keyof typeof ProjectHistoryResponseActionEnum];


/**
 * Check if a given object implements the ProjectHistoryResponse interface.
 */
export function instanceOfProjectHistoryResponse(value: object): value is ProjectHistoryResponse {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('action' in value) || value['action'] === undefined) return false;
    if (!('project_id' in value) || value['project_id'] === undefined) return false;
    if (!('user_id' in value) || value['user_id'] === undefined) return false;
    if (!('group_id' in value) || value['group_id'] === undefined) return false;
    return true;
}

export function ProjectHistoryResponseFromJSON(json: any): ProjectHistoryResponse {
    return ProjectHistoryResponseFromJSONTyped(json, false);
}

export function ProjectHistoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectHistoryResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'action': json['action'],
        'project_id': json['project_id'],
        'user_id': json['user_id'],
        'group_id': json['group_id'],
        'date': json['date'] == null ? undefined : (new Date(json['date'])),
    };
}

export function ProjectHistoryResponseToJSON(json: any): ProjectHistoryResponse {
    return ProjectHistoryResponseToJSONTyped(json, false);
}

export function ProjectHistoryResponseToJSONTyped(value?: ProjectHistoryResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'action': value['action'],
        'project_id': value['project_id'],
        'user_id': value['user_id'],
        'group_id': value['group_id'],
        'date': value['date'] == null ? undefined : ((value['date']).toISOString()),
    };
}

