import distUtils from '$dist/utils.ts';
import { expect, test } from "vitest"
import { STOCK_PRODUCT } from "./util.data";
import ENUMS from '$dist/enums';

const COUNTABLE = ENUMS.PRODUCT_SIZE_COUNTABLE;

test('Utils sumProductQuantities on productSizeQuantity', () => {
    expect(ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY).toEqual('productSizeQuantity');
    const sum = distUtils.sumProductQuantities(STOCK_PRODUCT.productStocksData, COUNTABLE.QUANTITY)
    expect(sum).toEqual(20);
})

test('Utils sumProductQuantities on productSizeQuantityOwnStock', () => {
    expect(ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_OWN).toEqual('productSizeQuantityOwnStock');
    const sum = distUtils.sumProductQuantities(STOCK_PRODUCT.productStocksData, COUNTABLE.QUANTITY_OWN)
    expect(sum).toEqual(18);
})

test('Utils sumProductQuantities on productSizeQuantityOutsideStock', () => {
    expect(ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_OUTSIDE).toEqual('productSizeQuantityOutsideStock');
    const sum = distUtils.sumProductQuantities(STOCK_PRODUCT.productStocksData, COUNTABLE.QUANTITY_OUTSIDE)
    expect(sum).toEqual(5);
})

test('Utils sumProductQuantities on productSizeQuantityAllStocks', () => {
    expect(ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_ALL).toEqual('productSizeQuantityAllStocks');
    const sum = distUtils.sumProductQuantities(STOCK_PRODUCT.productStocksData, COUNTABLE.QUANTITY_ALL)
    expect(sum).toEqual(23);
})

test('Utils sumProductQuantities on productOrdersUnfinishedQuantities', () => {
    expect(ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_ORDERS_UNFINISHED).toEqual('productOrdersUnfinishedQuantities');
    const sum = distUtils.sumProductQuantities(STOCK_PRODUCT.productStocksData, COUNTABLE.QUANTITY_ORDERS_UNFINISHED)
    expect(sum).toEqual(2);
})

test('Utils sumProductQuantities on productSizesDeliveries', () => {
    expect(ENUMS.PRODUCT_SIZE_COUNTABLE.DELIVERIES).toEqual('productSizesDeliveries');
    const sum = distUtils.sumProductQuantities(STOCK_PRODUCT.productStocksData, COUNTABLE.DELIVERIES)
    expect(sum).toEqual(6);
})

test('Utils sumProductQuantities on productSizesDispositionsInAuctions', () => {
    expect(ENUMS.PRODUCT_SIZE_COUNTABLE.AUCTIONS).toEqual('productSizesDispositionsInAuctions');
    const sum = distUtils.sumProductQuantities(STOCK_PRODUCT.productStocksData, COUNTABLE.AUCTIONS)
    expect(sum).toEqual(1);
})