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
 * @interface MethodSetStatusChannelRequest
 */
export interface MethodSetStatusChannelRequest {
    /**
     * Version
     * @type {string}
     * @memberof MethodSetStatusChannelRequest
     */
    v: MethodSetStatusChannelRequestVEnum;
    /**
     * Current language
     * @type {string}
     * @memberof MethodSetStatusChannelRequest
     */
    language?: MethodSetStatusChannelRequestLanguageEnum;
    /**
     * Channel id
     * @type {number}
     * @memberof MethodSetStatusChannelRequest
     */
    channel_id: number;
    /**
     * Status channel status
     * @type {boolean}
     * @memberof MethodSetStatusChannelRequest
     */
    status: boolean;
}
/**
 * @export
 */
export declare const MethodSetStatusChannelRequestVEnum: {
    readonly _1: "1";
};
export type MethodSetStatusChannelRequestVEnum = typeof MethodSetStatusChannelRequestVEnum[keyof typeof MethodSetStatusChannelRequestVEnum];
/**
 * @export
 */
export declare const MethodSetStatusChannelRequestLanguageEnum: {
    readonly ru: "ru";
    readonly en: "en";
    readonly cn: "cn";
};
export type MethodSetStatusChannelRequestLanguageEnum = typeof MethodSetStatusChannelRequestLanguageEnum[keyof typeof MethodSetStatusChannelRequestLanguageEnum];
/**
 * Check if a given object implements the MethodSetStatusChannelRequest interface.
 */
export declare function instanceOfMethodSetStatusChannelRequest(value: object): value is MethodSetStatusChannelRequest;
export declare function MethodSetStatusChannelRequestFromJSON(json: any): MethodSetStatusChannelRequest;
export declare function MethodSetStatusChannelRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MethodSetStatusChannelRequest;
export declare function MethodSetStatusChannelRequestToJSON(json: any): MethodSetStatusChannelRequest;
export declare function MethodSetStatusChannelRequestToJSONTyped(value?: MethodSetStatusChannelRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=MethodSetStatusChannelRequest.d.ts.map