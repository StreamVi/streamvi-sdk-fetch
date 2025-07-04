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
 * @interface CheckPullKeyResponse
 */
export interface CheckPullKeyResponse {
    /**
     * Transport
     * @type {string}
     * @memberof CheckPullKeyResponse
     */
    transport: CheckPullKeyResponseTransportEnum;
    /**
     * Pull status
     * @type {string}
     * @memberof CheckPullKeyResponse
     */
    status: CheckPullKeyResponseStatusEnum;
    /**
     * Key
     * @type {string}
     * @memberof CheckPullKeyResponse
     */
    key: string;
}
/**
 * @export
 */
export declare const CheckPullKeyResponseTransportEnum: {
    readonly rtmp: "rtmp";
    readonly srt: "srt";
    readonly hls: "hls";
};
export type CheckPullKeyResponseTransportEnum = typeof CheckPullKeyResponseTransportEnum[keyof typeof CheckPullKeyResponseTransportEnum];
/**
 * @export
 */
export declare const CheckPullKeyResponseStatusEnum: {
    readonly active: "active";
    readonly inactive: "inactive";
    readonly error: "error";
};
export type CheckPullKeyResponseStatusEnum = typeof CheckPullKeyResponseStatusEnum[keyof typeof CheckPullKeyResponseStatusEnum];
/**
 * Check if a given object implements the CheckPullKeyResponse interface.
 */
export declare function instanceOfCheckPullKeyResponse(value: object): value is CheckPullKeyResponse;
export declare function CheckPullKeyResponseFromJSON(json: any): CheckPullKeyResponse;
export declare function CheckPullKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckPullKeyResponse;
export declare function CheckPullKeyResponseToJSON(json: any): CheckPullKeyResponse;
export declare function CheckPullKeyResponseToJSONTyped(value?: CheckPullKeyResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=CheckPullKeyResponse.d.ts.map