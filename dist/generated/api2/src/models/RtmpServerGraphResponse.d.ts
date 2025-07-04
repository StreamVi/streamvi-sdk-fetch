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
import type { TCountryChartData } from './TCountryChartData';
/**
 *
 * @export
 * @interface RtmpServerGraphResponse
 */
export interface RtmpServerGraphResponse {
    /**
     * Type of graph to display
     * @type {string}
     * @memberof RtmpServerGraphResponse
     */
    type: RtmpServerGraphResponseTypeEnum;
    /**
     * Time line for graph [timestamp]
     * @type {Array<number>}
     * @memberof RtmpServerGraphResponse
     */
    timeLine: Array<number>;
    /**
     *
     * @type {Array<TCountryChartData>}
     * @memberof RtmpServerGraphResponse
     */
    countries: Array<TCountryChartData>;
}
/**
 * @export
 */
export declare const RtmpServerGraphResponseTypeEnum: {
    readonly performance: "performance";
    readonly network: "network";
    readonly cpu: "cpu";
    readonly ram: "ram";
    readonly deliveredPackages: "deliveredPackages";
};
export type RtmpServerGraphResponseTypeEnum = typeof RtmpServerGraphResponseTypeEnum[keyof typeof RtmpServerGraphResponseTypeEnum];
/**
 * Check if a given object implements the RtmpServerGraphResponse interface.
 */
export declare function instanceOfRtmpServerGraphResponse(value: object): value is RtmpServerGraphResponse;
export declare function RtmpServerGraphResponseFromJSON(json: any): RtmpServerGraphResponse;
export declare function RtmpServerGraphResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RtmpServerGraphResponse;
export declare function RtmpServerGraphResponseToJSON(json: any): RtmpServerGraphResponse;
export declare function RtmpServerGraphResponseToJSONTyped(value?: RtmpServerGraphResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=RtmpServerGraphResponse.d.ts.map