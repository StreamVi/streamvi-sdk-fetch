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
import type { PullKeyItemResponse } from './PullKeyItemResponse';
/**
 *
 * @export
 * @interface PullKeyListResponse
 */
export interface PullKeyListResponse {
    /**
     * Array of items
     * @type {Array<PullKeyItemResponse>}
     * @memberof PullKeyListResponse
     */
    results: Array<PullKeyItemResponse>;
}
/**
 * Check if a given object implements the PullKeyListResponse interface.
 */
export declare function instanceOfPullKeyListResponse(value: object): value is PullKeyListResponse;
export declare function PullKeyListResponseFromJSON(json: any): PullKeyListResponse;
export declare function PullKeyListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PullKeyListResponse;
export declare function PullKeyListResponseToJSON(json: any): PullKeyListResponse;
export declare function PullKeyListResponseToJSONTyped(value?: PullKeyListResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=PullKeyListResponse.d.ts.map