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
/**
 *
 * @export
 * @interface PlanTranscodingItem
 */
export interface PlanTranscodingItem {
    /**
     * Plan transcoding id
     * @type {number}
     * @memberof PlanTranscodingItem
     */
    id: number;
    /**
     * Count flows
     * @type {number}
     * @memberof PlanTranscodingItem
     */
    count: number;
    /**
     * Date end tariff
     * @type {Date}
     * @memberof PlanTranscodingItem
     */
    date_end: Date;
    /**
     * Plan title
     * @type {string}
     * @memberof PlanTranscodingItem
     */
    title: string;
    /**
     * Prolongation
     * @type {number}
     * @memberof PlanTranscodingItem
     */
    prolongation?: number;
}
/**
 * Check if a given object implements the PlanTranscodingItem interface.
 */
export declare function instanceOfPlanTranscodingItem(value: object): value is PlanTranscodingItem;
export declare function PlanTranscodingItemFromJSON(json: any): PlanTranscodingItem;
export declare function PlanTranscodingItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanTranscodingItem;
export declare function PlanTranscodingItemToJSON(json: any): PlanTranscodingItem;
export declare function PlanTranscodingItemToJSONTyped(value?: PlanTranscodingItem | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=PlanTranscodingItem.d.ts.map