import { ENUMS, utils } from '../dist/index';
import { expect, test } from "vitest"
import { STOCK_PRODUCT } from './utilTestData';

const COUNTABLE = ENUMS.PRODUCT_SIZE_COUNTABLE;

test('Utils sumProductQuantities on productSizeQuantity', () => {
    expect(ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY).toEqual('productSizeQuantity');
    const sum = utils.sumProductQuantities(STOCK_PRODUCT.productStocksData, COUNTABLE.QUANTITY)
    expect(sum).toEqual(20);
})

test('Utils sumProductQuantities on productSizeQuantityOwnStock', () => {
    expect(ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_OWN).toEqual('productSizeQuantityOwnStock');
    const sum = utils.sumProductQuantities(STOCK_PRODUCT.productStocksData, COUNTABLE.QUANTITY_OWN)
    expect(sum).toEqual(18);
})

test('Utils sumProductQuantities on productSizeQuantityOutsideStock', () => {
    expect(ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_OUTSIDE).toEqual('productSizeQuantityOutsideStock');
    const sum = utils.sumProductQuantities(STOCK_PRODUCT.productStocksData, COUNTABLE.QUANTITY_OUTSIDE)
    expect(sum).toEqual(5);
})

test('Utils sumProductQuantities on productSizeQuantityAllStocks', () => {
    expect(ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_ALL).toEqual('productSizeQuantityAllStocks');
    const sum = utils.sumProductQuantities(STOCK_PRODUCT.productStocksData, COUNTABLE.QUANTITY_ALL)
    expect(sum).toEqual(23);
})

test('Utils sumProductQuantities on productOrdersUnfinishedQuantities', () => {
    expect(ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_UNFINISHED).toEqual('productOrdersUnfinishedQuantities');
    const sum = utils.sumProductQuantities(STOCK_PRODUCT.productStocksData, COUNTABLE.QUANTITY_UNFINISHED)
    expect(sum).toEqual(2);
})

test('Utils sumProductQuantities on productSizesDeliveries', () => {
    expect(ENUMS.PRODUCT_SIZE_COUNTABLE.DELIVERIES).toEqual('productSizesDeliveries');
    const sum = utils.sumProductQuantities(STOCK_PRODUCT.productStocksData, COUNTABLE.DELIVERIES)
    expect(sum).toEqual(6);
})

test('Utils sumProductQuantities on productSizesDispositionsInAuctions', () => {
    expect(ENUMS.PRODUCT_SIZE_COUNTABLE.AUCTIONS).toEqual('productSizesDispositionsInAuctions');
    const sum = utils.sumProductQuantities(STOCK_PRODUCT.productStocksData, COUNTABLE.AUCTIONS)
    expect(sum).toEqual(1);
})