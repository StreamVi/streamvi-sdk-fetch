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
import type { PlanRestream2UserItemResponse } from './PlanRestream2UserItemResponse';
import type { PlanRestreamResponse } from './PlanRestreamResponse';
/**
 *
 * @export
 * @interface ProjectInfoRestreamResponse
 */
export interface ProjectInfoRestreamResponse {
    /**
     * Plan restream to user
     * @type {PlanRestream2UserItemResponse}
     * @memberof ProjectInfoRestreamResponse
     */
    plan2user: PlanRestream2UserItemResponse;
    /**
     * Plan restream data
     * @type {PlanRestreamResponse}
     * @memberof ProjectInfoRestreamResponse
     */
    data: PlanRestreamResponse;
}
/**
 * Check if a given object implements the ProjectInfoRestreamResponse interface.
 */
export declare function instanceOfProjectInfoRestreamResponse(value: object): value is ProjectInfoRestreamResponse;
export declare function ProjectInfoRestreamResponseFromJSON(json: any): ProjectInfoRestreamResponse;
export declare function ProjectInfoRestreamResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectInfoRestreamResponse;
export declare function ProjectInfoRestreamResponseToJSON(json: any): ProjectInfoRestreamResponse;
export declare function ProjectInfoRestreamResponseToJSONTyped(value?: ProjectInfoRestreamResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ProjectInfoRestreamResponse.d.ts.map