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
 * @interface TelegramInitConnectResponseDto
 */
export interface TelegramInitConnectResponseDto {
    /**
     * Code for connect
     * @type {string}
     * @memberof TelegramInitConnectResponseDto
     */
    code: string;
}
/**
 * Check if a given object implements the TelegramInitConnectResponseDto interface.
 */
export declare function instanceOfTelegramInitConnectResponseDto(value: object): value is TelegramInitConnectResponseDto;
export declare function TelegramInitConnectResponseDtoFromJSON(json: any): TelegramInitConnectResponseDto;
export declare function TelegramInitConnectResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TelegramInitConnectResponseDto;
export declare function TelegramInitConnectResponseDtoToJSON(json: any): TelegramInitConnectResponseDto;
export declare function TelegramInitConnectResponseDtoToJSONTyped(value?: TelegramInitConnectResponseDto | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=TelegramInitConnectResponseDto.d.ts.map