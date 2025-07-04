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
import type { PlanStorageItem } from './PlanStorageItem';
/**
 *
 * @export
 * @interface PlanStorageForProject
 */
export interface PlanStorageForProject {
    /**
     * Before tariff restream
     * @type {PlanStorageItem}
     * @memberof PlanStorageForProject
     */
    before: PlanStorageItem;
    /**
     * Current tariff restream
     * @type {PlanStorageItem}
     * @memberof PlanStorageForProject
     */
    current: PlanStorageItem;
    /**
     * Next tariff restream
     * @type {PlanStorageItem}
     * @memberof PlanStorageForProject
     */
    next: PlanStorageItem;
}
/**
 * Check if a given object implements the PlanStorageForProject interface.
 */
export declare function instanceOfPlanStorageForProject(value: object): value is PlanStorageForProject;
export declare function PlanStorageForProjectFromJSON(json: any): PlanStorageForProject;
export declare function PlanStorageForProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanStorageForProject;
export declare function PlanStorageForProjectToJSON(json: any): PlanStorageForProject;
export declare function PlanStorageForProjectToJSONTyped(value?: PlanStorageForProject | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=PlanStorageForProject.d.ts.map