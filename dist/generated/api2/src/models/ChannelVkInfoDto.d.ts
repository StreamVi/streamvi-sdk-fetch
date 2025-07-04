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
import type { ChannelPlayListInfoDto } from './ChannelPlayListInfoDto';
import type { ChannelVkCategoryInfoDto } from './ChannelVkCategoryInfoDto';
/**
 *
 * @export
 * @interface ChannelVkInfoDto
 */
export interface ChannelVkInfoDto {
    /**
     * Title of the channel
     * @type {string}
     * @memberof ChannelVkInfoDto
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof ChannelVkInfoDto
     */
    description: string;
    /**
     *
     * @type {boolean}
     * @memberof ChannelVkInfoDto
     */
    wall?: boolean;
    /**
     *
     * @type {string}
     * @memberof ChannelVkInfoDto
     */
    privacyVideo?: ChannelVkInfoDtoPrivacyVideoEnum;
    /**
     *
     * @type {string}
     * @memberof ChannelVkInfoDto
     */
    privacyComments?: ChannelVkInfoDtoPrivacyCommentsEnum;
    /**
     *
     * @type {ChannelPlayListInfoDto}
     * @memberof ChannelVkInfoDto
     */
    playlist?: ChannelPlayListInfoDto;
    /**
     *
     * @type {ChannelVkCategoryInfoDto}
     * @memberof ChannelVkInfoDto
     */
    category?: ChannelVkCategoryInfoDto;
}
/**
 * @export
 */
export declare const ChannelVkInfoDtoPrivacyVideoEnum: {
    readonly all: "all";
    readonly members: "members";
    readonly editors: "editors";
    readonly by_link: "by_link";
    readonly donut: "donut";
};
export type ChannelVkInfoDtoPrivacyVideoEnum = typeof ChannelVkInfoDtoPrivacyVideoEnum[keyof typeof ChannelVkInfoDtoPrivacyVideoEnum];
/**
 * @export
 */
export declare const ChannelVkInfoDtoPrivacyCommentsEnum: {
    readonly all: "all";
    readonly members: "members";
    readonly editors: "editors";
    readonly nobody: "nobody";
};
export type ChannelVkInfoDtoPrivacyCommentsEnum = typeof ChannelVkInfoDtoPrivacyCommentsEnum[keyof typeof ChannelVkInfoDtoPrivacyCommentsEnum];
/**
 * Check if a given object implements the ChannelVkInfoDto interface.
 */
export declare function instanceOfChannelVkInfoDto(value: object): value is ChannelVkInfoDto;
export declare function ChannelVkInfoDtoFromJSON(json: any): ChannelVkInfoDto;
export declare function ChannelVkInfoDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelVkInfoDto;
export declare function ChannelVkInfoDtoToJSON(json: any): ChannelVkInfoDto;
export declare function ChannelVkInfoDtoToJSONTyped(value?: ChannelVkInfoDto | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ChannelVkInfoDto.d.ts.map