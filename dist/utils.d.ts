import type { PRODUCT_SIZE_COUNTABLE, PRODUCT_SIZE_LOCATIONS, PRODUCT_SIZE_CODES, PRODUCE_SIZE_INDEX } from "./enums.d";
import type { SearchProductsResponse } from "./responses.d.ts"

export type IdosellProduct = SearchProductsResponse['results'][0];

export type GetIaICodeFunction = (productId: number|string, sizeId: string) => string;

export type SumProductQuantitiesFunction = (productStocksData: IdosellProduct['productStocksData'], stockType?: PRODUCT_SIZE_COUNTABLE | `${PRODUCT_SIZE_COUNTABLE}`) => number;

export type MapSizeQuantitesFunction = (product: IdosellProduct, stockType?: `${PRODUCT_SIZE_COUNTABLE}`, indexBy?: `${PRODUCE_SIZE_INDEX}`) => Record<string,number>;

export type MapProductCodesFunction = (product: IdosellProduct, codeType?: `${PRODUCT_SIZE_CODES}`, indexBy?: `${PRODUCE_SIZE_INDEX}`) => Record<string,string>;

export type MapProductAllCodesFunction = (product: IdosellProduct, indexBy?: `${PRODUCE_SIZE_INDEX}`) => Record<string,string[]>;

export type MapProductLocationsFunction = (product: IdosellProduct, stockId?: number, codeType?: `${PRODUCT_SIZE_LOCATIONS}`, indexBy?: `${PRODUCE_SIZE_INDEX}`) => Record<string,string[]>;

export type GetLangDataFunction = <T extends { langId: string}>(array: T[], langId?: string) => T|undefined;

export type ClearParametersLangDataFunction = (products: SearchProductsResponse['results'], langId: string = 'pol') => SearchProductsResponse['results'];

declare namespace utils {
    /** @description The method allows you to build an IAI code from the product ID and size ID. */
    const getIaiCode: GetIaICodeFunction;
    /** @description The method allows you to sum up the current stock levels: warehouses, available stocks, etc. */
    const sumProductQuantities: SumProductQuantitiesFunction;
    /** @description The method allows mapping the sum of the current stock levels (in warehouses, at disposal, etc.) divided into sizes */
    const mapSizeQuantites: MapSizeQuantitesFunction;
    /** @description The method allows mapping the producers's or external system's codes stored in the system to SKUs */
    const mapProductCodes: MapProductCodesFunction;
    /** @description The method allows mapping all known codes: IAI code, manufacturer code or external code as an array */
    const mapAllProductCodes: MapProductAllCodesFunction;
    /** @description This method allows you to map product locations stored in the system, broken down by size. You can select a specific warehouse or list all of them, both primary and secondary. */
    const mapProductLocations: MapProductLocationsFunction;
    /** @description Get first item (description, series, parameter name or value) with the selected langId */
    const getLangData: GetLangDataFunction;
    /** @description Modifies product response by removing all parameter names nad values that are not in selected langId */
    const clearParametersLangData: ClearParametersLangDataFunction;
}

export default utils;