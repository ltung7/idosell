import type { SearchProductsResponse } from "./responses.d.ts"

export enum QunatityType {
    ProductSizeQuantityOwnStock = "productSizeQuantityOwnStock",
    ProductSizeQuantityOutsideStock = "productSizeQuantityOutsideStock",
    ProductSizeQuantityAllStocks = "productSizeQuantityAllStocks",
    ProductStocksQuantities = "productStocksQuantities",
    ProductOrdersUnfinishedQuantities = "productOrdersUnfinishedQuantities",
    ProductSizesDeliveries = "productSizesDeliveries",
    ProductSizesDispositionsInAuctions = "productSizesDispositionsInAuctions",
}

export type IdosellProduct = SearchProductsResponse['results'][0];

export type GetIaICodeFunction = (productId: number|string, sizeId: string) => string;

export type SumProductQuantitiesFunction = (productStocksData: IdosellProduct['productStocksData'], stockType?: QunatityType) => number;

export type MapSizeQuantitesFunction = (product: IdosellProduct, stockType?: QunatityType) => Record<string,number>;

export type MapProductCodesFunction = (product: IdosellProduct, codeType?: 'productSizeCodeExternal'|'productSizeCodeProducer'|'sizePanelName') => Record<string,string>;

declare namespace utils {
    const QUANTITY_TYPE_ENUM: typeof QunatityType;
    const getIaiCode: GetIaICodeFunction;
    const sumProductQuantities: SumProductQuantitiesFunction;
    const mapSizeQuantites: MapSizeQuantitesFunction;
    const mapProductCodes: MapProductCodesFunction;
}

export default utils;