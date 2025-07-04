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
 * @interface CreatePullKeyRequest
 */
export interface CreatePullKeyRequest {
    /**
     * Version
     * @type {string}
     * @memberof CreatePullKeyRequest
     */
    v: CreatePullKeyRequestVEnum;
    /**
     * Current language
     * @type {string}
     * @memberof CreatePullKeyRequest
     */
    language: CreatePullKeyRequestLanguageEnum;
    /**
     * Project id
     * @type {number}
     * @memberof CreatePullKeyRequest
     */
    project_id: number;
    /**
     * Provider oauth
     * @type {string}
     * @memberof CreatePullKeyRequest
     */
    transport: CreatePullKeyRequestTransportEnum;
    /**
     * Name
     * @type {string}
     * @memberof CreatePullKeyRequest
     */
    name?: string;
}
/**
 * @export
 */
export declare const CreatePullKeyRequestVEnum: {
    readonly _1: "1";
    readonly _2: "2";
    readonly _3: "3";
};
export type CreatePullKeyRequestVEnum = typeof CreatePullKeyRequestVEnum[keyof typeof CreatePullKeyRequestVEnum];
/**
 * @export
 */
export declare const CreatePullKeyRequestLanguageEnum: {
    readonly ru: "ru";
    readonly en: "en";
    readonly cn: "cn";
};
export type CreatePullKeyRequestLanguageEnum = typeof CreatePullKeyRequestLanguageEnum[keyof typeof CreatePullKeyRequestLanguageEnum];
/**
 * @export
 */
export declare const CreatePullKeyRequestTransportEnum: {
    readonly rtmp: "rtmp";
    readonly srt: "srt";
    readonly hls: "hls";
};
export type CreatePullKeyRequestTransportEnum = typeof CreatePullKeyRequestTransportEnum[keyof typeof CreatePullKeyRequestTransportEnum];
/**
 * Check if a given object implements the CreatePullKeyRequest interface.
 */
export declare function instanceOfCreatePullKeyRequest(value: object): value is CreatePullKeyRequest;
export declare function CreatePullKeyRequestFromJSON(json: any): CreatePullKeyRequest;
export declare function CreatePullKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePullKeyRequest;
export declare function CreatePullKeyRequestToJSON(json: any): CreatePullKeyRequest;
export declare function CreatePullKeyRequestToJSONTyped(value?: CreatePullKeyRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=CreatePullKeyRequest.d.ts.map