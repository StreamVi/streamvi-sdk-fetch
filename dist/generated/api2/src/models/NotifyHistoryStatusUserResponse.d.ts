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
 * @interface NotifyHistoryStatusUserResponse
 */
export interface NotifyHistoryStatusUserResponse {
    /**
     * Count unread
     * @type {number}
     * @memberof NotifyHistoryStatusUserResponse
     */
    count_unread: number;
}
/**
 * Check if a given object implements the NotifyHistoryStatusUserResponse interface.
 */
export declare function instanceOfNotifyHistoryStatusUserResponse(value: object): value is NotifyHistoryStatusUserResponse;
export declare function NotifyHistoryStatusUserResponseFromJSON(json: any): NotifyHistoryStatusUserResponse;
export declare function NotifyHistoryStatusUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotifyHistoryStatusUserResponse;
export declare function NotifyHistoryStatusUserResponseToJSON(json: any): NotifyHistoryStatusUserResponse;
export declare function NotifyHistoryStatusUserResponseToJSONTyped(value?: NotifyHistoryStatusUserResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=NotifyHistoryStatusUserResponse.d.ts.map