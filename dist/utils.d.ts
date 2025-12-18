import type { PRODUCT_SIZE_COUNTABLE, PRODUCT_SIZE_LOCATIONS, PRODUCT_SIZE_CODES } from "./enums.d";
import type { SearchProductsResponse } from "./responses.d.ts"

export type IdosellProduct = SearchProductsResponse['results'][0];

export type GetIaICodeFunction = (productId: number|string, sizeId: string) => string;

export type SumProductQuantitiesFunction = (productStocksData: IdosellProduct['productStocksData'], stockType?: PRODUCT_SIZE_COUNTABLE | `${PRODUCT_SIZE_COUNTABLE}`) => number;

export type MapSizeQuantitesFunction = (product: IdosellProduct, stockType?: `${PRODUCT_SIZE_COUNTABLE}`) => Record<string,number>;

export type MapProductCodesFunction = (product: IdosellProduct, codeType?: `${PRODUCT_SIZE_CODES}`) => Record<string,string>;

export type MapProductLocationsFunction = (product: IdosellProduct, stockId?: number, codeType?: `${PRODUCT_SIZE_LOCATIONS}`) => Record<string,string[]>;

export type GetLangDataFunction = <T extends { langId: string}>(array: T[], langId?: string) => T|undefined;

export type ClearParametersLangDataFunction = (products: SearchProductsResponse['results'], langId: string = 'pol') => SearchProductsResponse['results'];

declare namespace utils {
    const getIaiCode: GetIaICodeFunction;
    const sumProductQuantities: SumProductQuantitiesFunction;
    const mapSizeQuantites: MapSizeQuantitesFunction;
    const mapProductCodes: MapProductCodesFunction;
    const getLangData: GetLangDataFunction;
    const clearParametersLangData: ClearParametersLangDataFunction;
    const mapProductLocations: MapProductLocationsFunction;
}

export default utils;