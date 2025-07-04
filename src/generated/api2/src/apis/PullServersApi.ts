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


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  PullServerListResponse,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PullServerListResponseFromJSON,
    PullServerListResponseToJSON,
} from '../models/index';

/**
 * PullServersApi - interface
 * 
 * @export
 * @interface PullServersApiInterface
 */
export interface PullServersApiInterface {
    /**
     * 
     * @summary Get pull servers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PullServersApiInterface
     */
    pullServersGetPullServersV1Raw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PullServerListResponse>>;

    /**
     * Get pull servers
     */
    pullServersGetPullServersV1(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PullServerListResponse>;

}

/**
 * 
 */
export class PullServersApi extends runtime.BaseAPI implements PullServersApiInterface {

    /**
     * Get pull servers
     */
    async pullServersGetPullServersV1Raw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PullServerListResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/method/pull-servers/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PullServerListResponseFromJSON(jsonValue));
    }

    /**
     * Get pull servers
     */
    async pullServersGetPullServersV1(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PullServerListResponse> {
        const response = await this.pullServersGetPullServersV1Raw(initOverrides);
        return await response.value();
    }

}
