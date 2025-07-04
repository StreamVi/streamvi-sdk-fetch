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
import type { PlanRestreamFeatureItem } from './PlanRestreamFeatureItem';
/**
 *
 * @export
 * @interface PlanRestreamFeatureListResponse
 */
export interface PlanRestreamFeatureListResponse {
    /**
     * Array of items
     * @type {Array<PlanRestreamFeatureItem>}
     * @memberof PlanRestreamFeatureListResponse
     */
    results: Array<PlanRestreamFeatureItem>;
}
/**
 * Check if a given object implements the PlanRestreamFeatureListResponse interface.
 */
export declare function instanceOfPlanRestreamFeatureListResponse(value: object): value is PlanRestreamFeatureListResponse;
export declare function PlanRestreamFeatureListResponseFromJSON(json: any): PlanRestreamFeatureListResponse;
export declare function PlanRestreamFeatureListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanRestreamFeatureListResponse;
export declare function PlanRestreamFeatureListResponseToJSON(json: any): PlanRestreamFeatureListResponse;
export declare function PlanRestreamFeatureListResponseToJSONTyped(value?: PlanRestreamFeatureListResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=PlanRestreamFeatureListResponse.d.ts.map