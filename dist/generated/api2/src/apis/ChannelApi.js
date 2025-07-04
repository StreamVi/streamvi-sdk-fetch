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
exports.MethodSearchV1TypeEnum = exports.MethodSearchV1VEnum = exports.MethodSearchV1LanguageEnum = exports.ChannelShortChannelListV1VEnum = exports.ChannelShortChannelListV1LanguageEnum = exports.ChannelApi = void 0;
const runtime = __importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class ChannelApi extends runtime.BaseAPI {
    /**
     * Minimal channel list
     */
    async channelShortChannelListV1Raw(requestParameters, initOverrides) {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError('language', 'Required parameter "language" was null or undefined when calling channelShortChannelListV1().');
        }
        if (requestParameters['project_id'] == null) {
            throw new runtime.RequiredError('project_id', 'Required parameter "project_id" was null or undefined when calling channelShortChannelListV1().');
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
        if (requestParameters['project_id'] != null) {
            queryParameters['project_id'] = requestParameters['project_id'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/method/channel/short`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.SiteGetShortChannelResponseFromJSON)(jsonValue));
    }
    /**
     * Minimal channel list
     */
    async channelShortChannelListV1(requestParameters, initOverrides) {
        const response = await this.channelShortChannelListV1Raw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Search channel list
     */
    async methodSearchV1Raw(requestParameters, initOverrides) {
        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError('language', 'Required parameter "language" was null or undefined when calling methodSearchV1().');
        }
        if (requestParameters['project_id'] == null) {
            throw new runtime.RequiredError('project_id', 'Required parameter "project_id" was null or undefined when calling methodSearchV1().');
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
        if (requestParameters['project_id'] != null) {
            queryParameters['project_id'] = requestParameters['project_id'];
        }
        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }
        if (requestParameters['platform'] != null) {
            queryParameters['platform'] = requestParameters['platform'];
        }
        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }
        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }
        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }
        const headerParameters = {};
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = await this.configuration.apiKey("X-API-KEY"); // X-API-KEY authentication
        }
        const response = await this.request({
            path: `/method/channel/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.SiteSearchChannelResponseFromJSON)(jsonValue));
    }
    /**
     * Search channel list
     */
    async methodSearchV1(requestParameters, initOverrides) {
        const response = await this.methodSearchV1Raw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get live status
     */
    async methodSetStatusV1Raw(requestParameters, initOverrides) {
        if (requestParameters['MethodSetStatusChannelRequest'] == null) {
            throw new runtime.RequiredError('MethodSetStatusChannelRequest', 'Required parameter "MethodSetStatusChannelRequest" was null or undefined when calling methodSetStatusV1().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-API-KEY"] = await this.configuration.apiKey("X-API-KEY"); // X-API-KEY authentication
        }
        const response = await this.request({
            path: `/method/channel/set-status`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.MethodSetStatusChannelRequestToJSON)(requestParameters['MethodSetStatusChannelRequest']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.SuccessResponseFromJSON)(jsonValue));
    }
    /**
     * Get live status
     */
    async methodSetStatusV1(requestParameters, initOverrides) {
        const response = await this.methodSetStatusV1Raw(requestParameters, initOverrides);
        return await response.value();
    }
}
exports.ChannelApi = ChannelApi;
/**
 * @export
 */
exports.ChannelShortChannelListV1LanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
};
/**
 * @export
 */
exports.ChannelShortChannelListV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
/**
 * @export
 */
exports.MethodSearchV1LanguageEnum = {
    ru: 'ru',
    en: 'en',
    cn: 'cn'
};
/**
 * @export
 */
exports.MethodSearchV1VEnum = {
    _1: '1',
    _2: '2',
    _3: '3'
};
/**
 * @export
 */
exports.MethodSearchV1TypeEnum = {
    all: 'all',
    my: 'my',
    available: 'available',
    active: 'active'
};
