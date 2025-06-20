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
import type { BlogPageSiteResponseId } from './BlogPageSiteResponseId';
import {
    BlogPageSiteResponseIdFromJSON,
    BlogPageSiteResponseIdFromJSONTyped,
    BlogPageSiteResponseIdToJSON,
    BlogPageSiteResponseIdToJSONTyped,
} from './BlogPageSiteResponseId';

/**
 * 
 * @export
 * @interface HelpPageResponse
 */
export interface HelpPageResponse {
    /**
     * 
     * @type {BlogPageSiteResponseId}
     * @memberof HelpPageResponse
     */
    _id: BlogPageSiteResponseId;
    /**
     * url
     * @type {string}
     * @memberof HelpPageResponse
     */
    url: string;
    /**
     * Generated url from root path
     * @type {string}
     * @memberof HelpPageResponse
     */
    url_inherit: string;
    /**
     * Notion parent id
     * @type {string}
     * @memberof HelpPageResponse
     */
    notion_parent_id: string;
    /**
     * Page status
     * @type {string}
     * @memberof HelpPageResponse
     */
    status: HelpPageResponseStatusEnum;
    /**
     * Date last update
     * @type {Date}
     * @memberof HelpPageResponse
     */
    date_update: Date;
    /**
     * Date create
     * @type {Date}
     * @memberof HelpPageResponse
     */
    date_create: Date;
    /**
     * Page icon
     * @type {object}
     * @memberof HelpPageResponse
     */
    icon: object | null;
    /**
     * Subject
     * @type {string}
     * @memberof HelpPageResponse
     */
    title: string;
    /**
     * Language for indexing
     * @type {string}
     * @memberof HelpPageResponse
     */
    language: HelpPageResponseLanguageEnum;
    /**
     * Language ISO
     * @type {string}
     * @memberof HelpPageResponse
     */
    language_iso: HelpPageResponseLanguageIsoEnum;
    /**
     * Text
     * @type {string}
     * @memberof HelpPageResponse
     */
    text: string;
    /**
     * Alternative language (Array of Language ISO)
     * @type {Array<string>}
     * @memberof HelpPageResponse
     */
    alt_languages: Array<HelpPageResponseAltLanguagesEnum>;
}


/**
 * @export
 */
export const HelpPageResponseStatusEnum = {
    None: 'None',
    Backlog: 'Backlog',
    Drafting: 'Drafting',
    Reviewing: 'Reviewing',
    Done: 'Done',
    Published: 'Published'
} as const;
export type HelpPageResponseStatusEnum = typeof HelpPageResponseStatusEnum[keyof typeof HelpPageResponseStatusEnum];

/**
 * @export
 */
export const HelpPageResponseLanguageEnum = {
    russian: 'russian',
    english: 'english',
    none: 'none'
} as const;
export type HelpPageResponseLanguageEnum = typeof HelpPageResponseLanguageEnum[keyof typeof HelpPageResponseLanguageEnum];

/**
 * @export
 */
export const HelpPageResponseLanguageIsoEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type HelpPageResponseLanguageIsoEnum = typeof HelpPageResponseLanguageIsoEnum[keyof typeof HelpPageResponseLanguageIsoEnum];

/**
 * @export
 */
export const HelpPageResponseAltLanguagesEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
} as const;
export type HelpPageResponseAltLanguagesEnum = typeof HelpPageResponseAltLanguagesEnum[keyof typeof HelpPageResponseAltLanguagesEnum];


/**
 * Check if a given object implements the HelpPageResponse interface.
 */
export function instanceOfHelpPageResponse(value: object): value is HelpPageResponse {
    if (!('_id' in value) || value['_id'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    if (!('url_inherit' in value) || value['url_inherit'] === undefined) return false;
    if (!('notion_parent_id' in value) || value['notion_parent_id'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('date_update' in value) || value['date_update'] === undefined) return false;
    if (!('date_create' in value) || value['date_create'] === undefined) return false;
    if (!('icon' in value) || value['icon'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('language' in value) || value['language'] === undefined) return false;
    if (!('language_iso' in value) || value['language_iso'] === undefined) return false;
    if (!('text' in value) || value['text'] === undefined) return false;
    if (!('alt_languages' in value) || value['alt_languages'] === undefined) return false;
    return true;
}

export function HelpPageResponseFromJSON(json: any): HelpPageResponse {
    return HelpPageResponseFromJSONTyped(json, false);
}

export function HelpPageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HelpPageResponse {
    if (json == null) {
        return json;
    }
    return {
        
        '_id': BlogPageSiteResponseIdFromJSON(json['_id']),
        'url': json['url'],
        'url_inherit': json['url_inherit'],
        'notion_parent_id': json['notion_parent_id'],
        'status': json['status'],
        'date_update': (new Date(json['date_update'])),
        'date_create': (new Date(json['date_create'])),
        'icon': json['icon'],
        'title': json['title'],
        'language': json['language'],
        'language_iso': json['language_iso'],
        'text': json['text'],
        'alt_languages': json['alt_languages'],
    };
}

export function HelpPageResponseToJSON(json: any): HelpPageResponse {
    return HelpPageResponseToJSONTyped(json, false);
}

export function HelpPageResponseToJSONTyped(value?: HelpPageResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '_id': BlogPageSiteResponseIdToJSON(value['_id']),
        'url': value['url'],
        'url_inherit': value['url_inherit'],
        'notion_parent_id': value['notion_parent_id'],
        'status': value['status'],
        'date_update': ((value['date_update']).toISOString()),
        'date_create': ((value['date_create']).toISOString()),
        'icon': value['icon'],
        'title': value['title'],
        'language': value['language'],
        'language_iso': value['language_iso'],
        'text': value['text'],
        'alt_languages': value['alt_languages'],
    };
}

