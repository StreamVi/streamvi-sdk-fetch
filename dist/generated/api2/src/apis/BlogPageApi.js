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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPageListV1VEnum = exports.BlogPageListV1LanguageEnum = exports.BlogPageGetV1VEnum = exports.BlogPageGetV1LanguageEnum = exports.BlogPageApi = void 0;
const runtime = __importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class BlogPageApi extends runtime.BaseAPI {
    /**
     * Get blog page
     */
    async blogPageGetV1Raw(requestParameters, initOverrides) {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError('language', 'Required parameter "language" was null or undefined when calling blogPageGetV1().');
        }
        if (requestParameters['url'] == null) {
            throw new runtime.RequiredError('url', 'Required parameter "url" was null or undefined when calling blogPageGetV1().');
        }
        const queryParameters = {};
        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        }
        else {
            queryParameters['v'] = '1';
        }
        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }
        if (requestParameters['url'] != null) {
            queryParameters['url'] = requestParameters['url'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/method/blog/page/get`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PaginatedResponseOfBlogPageSiteResponseFromJSON)(jsonValue));
    }
    /**
     * Get blog page
     */
    async blogPageGetV1(requestParameters, initOverrides) {
        const response = await this.blogPageGetV1Raw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get list of blog pages
     */
    async blogPageListV1Raw(requestParameters, initOverrides) {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError('language', 'Required parameter "language" was null or undefined when calling blogPageListV1().');
        }
        const queryParameters = {};
        if (requestParameters['v'] != null) {
            queryParameters['v'] = requestParameters['v'];
        }
        else {
            queryParameters['v'] = '1';
        }
        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }
        if (requestParameters['s'] != null) {
            queryParameters['s'] = requestParameters['s'];
        }
        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }
        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/method/blog/page/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PaginatedResponseOfBlogPageSiteResponseFromJSON)(jsonValue));
    }
    /**
     * Get list of blog pages
     */
    async blogPageListV1(requestParameters, initOverrides) {
        const response = await this.blogPageListV1Raw(requestParameters, initOverrides);
        return await response.value();
    }
}
exports.BlogPageApi = BlogPageApi;
/**
 * @export
 */
exports.BlogPageGetV1LanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
};
/**
 * @export
 */
exports.BlogPageGetV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
/**
 * @export
 */
exports.BlogPageListV1LanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
};
/**
 * @export
 */
exports.BlogPageListV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
