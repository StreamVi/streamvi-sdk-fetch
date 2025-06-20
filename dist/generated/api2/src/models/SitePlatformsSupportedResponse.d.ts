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
import type { PlatformsSupportedItem } from './PlatformsSupportedItem';
/**
 *
 * @export
 * @interface SitePlatformsSupportedResponse
 */
export interface SitePlatformsSupportedResponse {
    /**
     * Array of items
     * @type {Array<PlatformsSupportedItem>}
     * @memberof SitePlatformsSupportedResponse
     */
    results: Array<PlatformsSupportedItem>;
}
/**
 * Check if a given object implements the SitePlatformsSupportedResponse interface.
 */
export declare function instanceOfSitePlatformsSupportedResponse(value: object): value is SitePlatformsSupportedResponse;
export declare function SitePlatformsSupportedResponseFromJSON(json: any): SitePlatformsSupportedResponse;
export declare function SitePlatformsSupportedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SitePlatformsSupportedResponse;
export declare function SitePlatformsSupportedResponseToJSON(json: any): SitePlatformsSupportedResponse;
export declare function SitePlatformsSupportedResponseToJSONTyped(value?: SitePlatformsSupportedResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=SitePlatformsSupportedResponse.d.ts.map