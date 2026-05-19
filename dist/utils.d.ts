import { ENUMS } from "./enums";
import type { SearchProductsResponse, GetRmaResponse } from "./responses.d.ts";
type IdosellProduct = SearchProductsResponse['results'][0];
type GetIaICodeFunction = (_productId: number | string, _sizeId: string) => string;
type SumProductQuantitiesFunction = (_productStocksData: IdosellProduct['productStocksData'], _stockType?: ENUMS.PRODUCT_SIZE_COUNTABLE | `${ENUMS.PRODUCT_SIZE_COUNTABLE}`) => number;
type MapSizeQuantitesFunction = (_product: IdosellProduct, _stockType?: `${ENUMS.PRODUCT_SIZE_COUNTABLE}`, _indexBy?: `${ENUMS.PRODUCE_SIZE_INDEX}`) => Record<string, number>;
type MapProductCodesFunction = (_product: IdosellProduct, _codeType?: `${ENUMS.PRODUCT_SIZE_CODES}`, _indexBy?: `${ENUMS.PRODUCE_SIZE_INDEX}`) => Record<string, string>;
type MapProductAllCodesFunction = (_product: IdosellProduct, _indexBy?: `${ENUMS.PRODUCE_SIZE_INDEX}`) => Record<string, string[]>;
type MapProductLocationsFunction = (_product: IdosellProduct, _stockId?: number, _codeType?: `${ENUMS.PRODUCT_SIZE_LOCATIONS}`, _indexBy?: `${ENUMS.PRODUCE_SIZE_INDEX}`) => Record<string, string[]>;
type GetLangDataFunction = <T extends {
    langId: string;
}>(_array: T[], _langId?: string) => T | undefined;
type ClearParametersLangDataFunction = (_products: SearchProductsResponse['results'], _langId?: string) => SearchProductsResponse['results'];
declare const _default: {
    /** @description The method allows you to build an IAI code from the product ID and size ID. */
    getIaiCode: GetIaICodeFunction;
    /** @description The method allows you to sum up the current stock levels: warehouses, available stocks, etc. */
    sumProductQuantities: SumProductQuantitiesFunction;
    /** @description The method allows mapping the sum of the current stock levels (in warehouses, at disposal, etc.) divided into sizes */
    mapSizeQuantites: MapSizeQuantitesFunction;
    /** @description The method allows mapping the producers's or external system's codes stored in the system to SKUs */
    mapProductCodes: MapProductCodesFunction;
    /** @description The method allows mapping all known codes: IAI code, manufacturer code or external code as an array */
    mapAllProductCodes: MapProductAllCodesFunction;
    /** @description This method allows you to map product locations stored in the system, broken down by size. You can select a specific warehouse or list all of them, both primary and secondary. */
    mapProductLocations: MapProductLocationsFunction;
    /** @description Get first item (description, series, parameter name or value) with the selected langId */
    getLangData: GetLangDataFunction;
    /** @description Modifies product response by removing all parameter names nad values that are not in selected langId */
    clearParametersLangData: ClearParametersLangDataFunction;
    /** @description Removes attachments to RMA that are returned by default, helps to reduce data if serialized or forwarded */
    removeRmaAttachments: (rmaResponse: GetRmaResponse) => GetRmaResponse;
};
export default _default;
