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
 * @interface CategorySubListItemResponse
 */
export interface CategorySubListItemResponse {
    /**
     * id
     * @type {string}
     * @memberof CategorySubListItemResponse
     */
    id: string;
    /**
     * name
     * @type {string}
     * @memberof CategorySubListItemResponse
     */
    name: string;
}

/**
 * Check if a given object implements the CategorySubListItemResponse interface.
 */
export function instanceOfCategorySubListItemResponse(value: object): value is CategorySubListItemResponse {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function CategorySubListItemResponseFromJSON(json: any): CategorySubListItemResponse {
    return CategorySubListItemResponseFromJSONTyped(json, false);
}

export function CategorySubListItemResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategorySubListItemResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function CategorySubListItemResponseToJSON(json: any): CategorySubListItemResponse {
    return CategorySubListItemResponseToJSONTyped(json, false);
}

export function CategorySubListItemResponseToJSONTyped(value?: CategorySubListItemResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
    };
}

