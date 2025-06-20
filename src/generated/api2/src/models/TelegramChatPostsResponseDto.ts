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
import type { TelegramChatPostsItem } from './TelegramChatPostsItem';
import {
    TelegramChatPostsItemFromJSON,
    TelegramChatPostsItemFromJSONTyped,
    TelegramChatPostsItemToJSON,
    TelegramChatPostsItemToJSONTyped,
} from './TelegramChatPostsItem';

/**
 * 
 * @export
 * @interface TelegramChatPostsResponseDto
 */
export interface TelegramChatPostsResponseDto {
    /**
     * Array of items
     * @type {Array<TelegramChatPostsItem>}
     * @memberof TelegramChatPostsResponseDto
     */
    results: Array<TelegramChatPostsItem>;
}

/**
 * Check if a given object implements the TelegramChatPostsResponseDto interface.
 */
export function instanceOfTelegramChatPostsResponseDto(value: object): value is TelegramChatPostsResponseDto {
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function TelegramChatPostsResponseDtoFromJSON(json: any): TelegramChatPostsResponseDto {
    return TelegramChatPostsResponseDtoFromJSONTyped(json, false);
}

export function TelegramChatPostsResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TelegramChatPostsResponseDto {
    if (json == null) {
        return json;
    }
    return {
        
        'results': ((json['results'] as Array<any>).map(TelegramChatPostsItemFromJSON)),
    };
}

export function TelegramChatPostsResponseDtoToJSON(json: any): TelegramChatPostsResponseDto {
    return TelegramChatPostsResponseDtoToJSONTyped(json, false);
}

export function TelegramChatPostsResponseDtoToJSONTyped(value?: TelegramChatPostsResponseDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'results': ((value['results'] as Array<any>).map(TelegramChatPostsItemToJSON)),
    };
}

