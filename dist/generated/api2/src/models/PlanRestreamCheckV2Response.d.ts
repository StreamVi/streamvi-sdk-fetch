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
 * @interface PlanRestreamCheckV2Response
 */
export interface PlanRestreamCheckV2Response {
    /**
     * Tariff price
     * @type {number}
     * @memberof PlanRestreamCheckV2Response
     */
    tariff_price_month: number;
    /**
     * Tariff price
     * @type {number}
     * @memberof PlanRestreamCheckV2Response
     */
    tariff_price_year: number;
    /**
     * Balance for pay
     * @type {number}
     * @memberof PlanRestreamCheckV2Response
     */
    balance: number;
    /**
     * Sum for pay
     * @type {number}
     * @memberof PlanRestreamCheckV2Response
     */
    sum?: number;
    /**
     * Refund current
     * @type {number}
     * @memberof PlanRestreamCheckV2Response
     */
    refund_current?: number;
    /**
     * Refund after
     * @type {number}
     * @memberof PlanRestreamCheckV2Response
     */
    refund_after?: number;
    /**
     * Refund balance
     * @type {number}
     * @memberof PlanRestreamCheckV2Response
     */
    refund_balance?: number;
    /**
     * Decrease balance
     * @type {number}
     * @memberof PlanRestreamCheckV2Response
     */
    decrease_balance?: number;
    /**
     * Value for total
     * @type {number}
     * @memberof PlanRestreamCheckV2Response
     */
    total?: number;
    /**
     * Name for button
     * @type {string}
     * @memberof PlanRestreamCheckV2Response
     */
    notification?: string;
    /**
     * Date for notification
     * @type {Date}
     * @memberof PlanRestreamCheckV2Response
     */
    notification_date?: Date;
    /**
     * Name for button
     * @type {string}
     * @memberof PlanRestreamCheckV2Response
     */
    button_name: string;
    /**
     * Currency
     * @type {string}
     * @memberof PlanRestreamCheckV2Response
     */
    currency: PlanRestreamCheckV2ResponseCurrencyEnum;
    /**
     * Status for plan
     * @type {string}
     * @memberof PlanRestreamCheckV2Response
     */
    choose_status: PlanRestreamCheckV2ResponseChooseStatusEnum;
    /**
     * Status for plan
     * @type {string}
     * @memberof PlanRestreamCheckV2Response
     */
    status: PlanRestreamCheckV2ResponseStatusEnum;
    /**
     * Current channels
     * @type {number}
     * @memberof PlanRestreamCheckV2Response
     */
    channel?: number;
    /**
     * Current bitrate
     * @type {number}
     * @memberof PlanRestreamCheckV2Response
     */
    bitrate?: number;
}
/**
 * @export
 */
export declare const PlanRestreamCheckV2ResponseCurrencyEnum: {
    readonly rub: "rub";
    readonly usd: "usd";
};
export type PlanRestreamCheckV2ResponseCurrencyEnum = typeof PlanRestreamCheckV2ResponseCurrencyEnum[keyof typeof PlanRestreamCheckV2ResponseCurrencyEnum];
/**
 * @export
 */
export declare const PlanRestreamCheckV2ResponseChooseStatusEnum: {
    readonly new: "new";
    readonly prolongate: "prolongate";
    readonly upgrade: "upgrade";
    readonly downgrade: "downgrade";
};
export type PlanRestreamCheckV2ResponseChooseStatusEnum = typeof PlanRestreamCheckV2ResponseChooseStatusEnum[keyof typeof PlanRestreamCheckV2ResponseChooseStatusEnum];
/**
 * @export
 */
export declare const PlanRestreamCheckV2ResponseStatusEnum: {
    readonly new: "new";
    readonly current: "current";
    readonly current_upgrade: "current_upgrade";
    readonly current_downgrade: "current_downgrade";
    readonly upgrade: "upgrade";
    readonly downgrade: "downgrade";
};
export type PlanRestreamCheckV2ResponseStatusEnum = typeof PlanRestreamCheckV2ResponseStatusEnum[keyof typeof PlanRestreamCheckV2ResponseStatusEnum];
/**
 * Check if a given object implements the PlanRestreamCheckV2Response interface.
 */
export declare function instanceOfPlanRestreamCheckV2Response(value: object): value is PlanRestreamCheckV2Response;
export declare function PlanRestreamCheckV2ResponseFromJSON(json: any): PlanRestreamCheckV2Response;
export declare function PlanRestreamCheckV2ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanRestreamCheckV2Response;
export declare function PlanRestreamCheckV2ResponseToJSON(json: any): PlanRestreamCheckV2Response;
export declare function PlanRestreamCheckV2ResponseToJSONTyped(value?: PlanRestreamCheckV2Response | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=PlanRestreamCheckV2Response.d.ts.map