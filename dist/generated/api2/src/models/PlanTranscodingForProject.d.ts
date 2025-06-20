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
import type { PlanTranscodingItem } from './PlanTranscodingItem';
/**
 *
 * @export
 * @interface PlanTranscodingForProject
 */
export interface PlanTranscodingForProject {
    /**
     * Before tariff transcoding
     * @type {PlanTranscodingItem}
     * @memberof PlanTranscodingForProject
     */
    before: PlanTranscodingItem;
    /**
     * Current tariff transcoding
     * @type {PlanTranscodingItem}
     * @memberof PlanTranscodingForProject
     */
    current: PlanTranscodingItem;
    /**
     * Next tariff transcoding
     * @type {PlanTranscodingItem}
     * @memberof PlanTranscodingForProject
     */
    next: PlanTranscodingItem;
}
/**
 * Check if a given object implements the PlanTranscodingForProject interface.
 */
export declare function instanceOfPlanTranscodingForProject(value: object): value is PlanTranscodingForProject;
export declare function PlanTranscodingForProjectFromJSON(json: any): PlanTranscodingForProject;
export declare function PlanTranscodingForProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanTranscodingForProject;
export declare function PlanTranscodingForProjectToJSON(json: any): PlanTranscodingForProject;
export declare function PlanTranscodingForProjectToJSONTyped(value?: PlanTranscodingForProject | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=PlanTranscodingForProject.d.ts.map