import type { SearchProductsResponse } from "./responses.d.ts"

export enum ProductQuantityKey {
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

export type SumProductQuantitiesFunction = (productStocksData: IdosellProduct['productStocksData'], stockType?: ProductQuantityKey) => number;

export type MapSizeQuantitesFunction = (product: IdosellProduct, stockType?: ProductQuantityKey) => Record<string,number>;

export type MapProductCodesFunction = (product: IdosellProduct, codeType?: 'productSizeCodeExternal'|'productSizeCodeProducer'|'sizePanelName') => Record<string,string>;

declare const _default: {
    getIaiCode: GetIaICodeFunction;
    sumProductQuantities: SumProductQuantitiesFunction;
    mapSizeQuantites: MapSizeQuantitesFunction;
    mapProductCodes: MapProductCodesFunction;
};
export default _default;