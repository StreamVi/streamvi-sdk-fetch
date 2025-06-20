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
import type { PlannedItemResponse } from './PlannedItemResponse';
/**
 *
 * @export
 * @interface SitePlannedResponse
 */
export interface SitePlannedResponse {
    /**
     * Planned item
     * @type {PlannedItemResponse}
     * @memberof SitePlannedResponse
     */
    planned?: PlannedItemResponse;
}
/**
 * Check if a given object implements the SitePlannedResponse interface.
 */
export declare function instanceOfSitePlannedResponse(value: object): value is SitePlannedResponse;
export declare function SitePlannedResponseFromJSON(json: any): SitePlannedResponse;
export declare function SitePlannedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SitePlannedResponse;
export declare function SitePlannedResponseToJSON(json: any): SitePlannedResponse;
export declare function SitePlannedResponseToJSONTyped(value?: SitePlannedResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=SitePlannedResponse.d.ts.map