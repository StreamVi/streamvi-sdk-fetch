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
 * @interface SiteMarkReadHistoryRequest
 */
export interface SiteMarkReadHistoryRequest {
    /**
     * Id of page in mongodb
     * @type {Array<string>}
     * @memberof SiteMarkReadHistoryRequest
     */
    notify_history_ids: Array<string>;
}
/**
 * Check if a given object implements the SiteMarkReadHistoryRequest interface.
 */
export declare function instanceOfSiteMarkReadHistoryRequest(value: object): value is SiteMarkReadHistoryRequest;
export declare function SiteMarkReadHistoryRequestFromJSON(json: any): SiteMarkReadHistoryRequest;
export declare function SiteMarkReadHistoryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SiteMarkReadHistoryRequest;
export declare function SiteMarkReadHistoryRequestToJSON(json: any): SiteMarkReadHistoryRequest;
export declare function SiteMarkReadHistoryRequestToJSONTyped(value?: SiteMarkReadHistoryRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=SiteMarkReadHistoryRequest.d.ts.map