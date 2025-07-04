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
 * @interface LiveRestreamCentrifugeItemV2
 */
export interface LiveRestreamCentrifugeItemV2 {
    /**
     * Token for authentication channel
     * @type {string}
     * @memberof LiveRestreamCentrifugeItemV2
     */
    token: string;
    /**
     * Channel for subscription
     * @type {string}
     * @memberof LiveRestreamCentrifugeItemV2
     */
    channel: string;
}
/**
 * Check if a given object implements the LiveRestreamCentrifugeItemV2 interface.
 */
export declare function instanceOfLiveRestreamCentrifugeItemV2(value: object): value is LiveRestreamCentrifugeItemV2;
export declare function LiveRestreamCentrifugeItemV2FromJSON(json: any): LiveRestreamCentrifugeItemV2;
export declare function LiveRestreamCentrifugeItemV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): LiveRestreamCentrifugeItemV2;
export declare function LiveRestreamCentrifugeItemV2ToJSON(json: any): LiveRestreamCentrifugeItemV2;
export declare function LiveRestreamCentrifugeItemV2ToJSONTyped(value?: LiveRestreamCentrifugeItemV2 | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=LiveRestreamCentrifugeItemV2.d.ts.map