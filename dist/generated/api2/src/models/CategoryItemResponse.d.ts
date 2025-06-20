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
import type { CategorySubListItemResponse } from './CategorySubListItemResponse';
/**
 *
 * @export
 * @interface CategoryItemResponse
 */
export interface CategoryItemResponse {
    /**
     * id
     * @type {string}
     * @memberof CategoryItemResponse
     */
    id: string;
    /**
     * name
     * @type {string}
     * @memberof CategoryItemResponse
     */
    name: string;
    /**
     * image
     * @type {string}
     * @memberof CategoryItemResponse
     */
    image?: string;
    /**
     * sublist
     * @type {Array<CategorySubListItemResponse>}
     * @memberof CategoryItemResponse
     */
    subList?: Array<CategorySubListItemResponse>;
}
/**
 * Check if a given object implements the CategoryItemResponse interface.
 */
export declare function instanceOfCategoryItemResponse(value: object): value is CategoryItemResponse;
export declare function CategoryItemResponseFromJSON(json: any): CategoryItemResponse;
export declare function CategoryItemResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryItemResponse;
export declare function CategoryItemResponseToJSON(json: any): CategoryItemResponse;
export declare function CategoryItemResponseToJSONTyped(value?: CategoryItemResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=CategoryItemResponse.d.ts.map