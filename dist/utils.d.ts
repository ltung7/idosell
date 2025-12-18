import type { PRODUCT_SIZE_COUNTABLE, PRODUCT_SIZE_STRING } from "./enums.d";
import type { SearchProductsResponse } from "./responses.d.ts"

export type IdosellProduct = SearchProductsResponse['results'][0];

export type GetIaICodeFunction = (productId: number|string, sizeId: string) => string;

export type SumProductQuantitiesFunction = (productStocksData: IdosellProduct['productStocksqData'], stockType?: PRODUCT_SIZE_COUNTABLE | `${PRODUCT_SIZE_COUNTABLE}`) => number;

export type MapSizeQuantitesFunction = (product: IdosellProduct, stockType?: PRODUCT_SIZE_COUNTABLE | `${PRODUCT_SIZE_COUNTABLE}`) => Record<string,number>;

export type MapProductCodesFunction = (product: IdosellProduct, codeType?: PRODUCT_SIZE_STRING | `${PRODUCT_SIZE_STRING}`, stockId?: number|string) => Record<string,string>;

export type GetLangDataFunction = <T extends { langId: string}>(array: T[], langId?: string) => T|undefined;

export type ClearParametersLangDataFunction = (products: SearchProductsResponse['results'], langId: string = 'pol') => SearchProductsResponse['results'];

declare namespace utils {
    const getIaiCode: GetIaICodeFunction;
    const sumProductQuantities: SumProductQuantitiesFunction;
    const mapSizeQuantites: MapSizeQuantitesFunction;
    const mapProductCodes: MapProductCodesFunction;
    const getLangData: GetLangDataFunction;
    const clearParametersLangData: ClearParametersLangDataFunction;
}

export default utils;