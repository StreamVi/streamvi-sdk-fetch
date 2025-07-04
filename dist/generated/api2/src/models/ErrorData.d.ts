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
import type { ValidationErrorDto } from './ValidationErrorDto';
/**
 *
 * @export
 * @interface ErrorData
 */
export interface ErrorData {
    /**
     * Error name
     * @type {string}
     * @memberof ErrorData
     */
    name: string;
    /**
     * Error message
     * @type {string}
     * @memberof ErrorData
     */
    msg: string;
    /**
     * Validator error array if name="I18nValidationException"
     * @type {Array<ValidationErrorDto>}
     * @memberof ErrorData
     */
    validator_error?: Array<ValidationErrorDto>;
    /**
     * Options
     * @type {object}
     * @memberof ErrorData
     */
    options: object;
    /**
     * Custom object for error
     * @type {object}
     * @memberof ErrorData
     */
    data: object;
}
/**
 * Check if a given object implements the ErrorData interface.
 */
export declare function instanceOfErrorData(value: object): value is ErrorData;
export declare function ErrorDataFromJSON(json: any): ErrorData;
export declare function ErrorDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorData;
export declare function ErrorDataToJSON(json: any): ErrorData;
export declare function ErrorDataToJSONTyped(value?: ErrorData | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ErrorData.d.ts.map