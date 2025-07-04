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
/**
 * SocialsApi - interface
 *
 * @export
 * @interface SocialsApiInterface
 */
export interface SocialsApiInterface {
    /**
     *
     * @summary Social list for user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SocialsApiInterface
     */
    socialsGetListV1Raw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Social list for user
     */
    socialsGetListV1(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
/**
 *
 */
export declare class SocialsApi extends runtime.BaseAPI implements SocialsApiInterface {
    /**
     * Social list for user
     */
    socialsGetListV1Raw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Social list for user
     */
    socialsGetListV1(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
//# sourceMappingURL=SocialsApi.d.ts.map