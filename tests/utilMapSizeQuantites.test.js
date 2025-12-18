import distUtils from '$dist/utils.ts';
import { expect, test } from "vitest"
import { STOCK_PRODUCT } from "./util.data";
import ENUMS from '$dist/enums';

const COUNTABLE = ENUMS.PRODUCT_SIZE_COUNTABLE;

test('Utils mapSizeQuantites on productSizeQuantity', () => {
    expect(COUNTABLE.QUANTITY).toEqual('productSizeQuantity');
    const quantities = distUtils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.QUANTITY)
    expect(quantities).toEqual({"3":10,"4":10,"5":0,"6":0});
})

test('Utils mapSizeQuantites on productSizeQuantityOwnStock', () => {
    expect(COUNTABLE.QUANTITY_OWN).toEqual('productSizeQuantityOwnStock');
    const quantities = distUtils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.QUANTITY_OWN)
    expect(quantities).toEqual({"3":8,"4":10,"5":0,"6":0});
})

test('Utils mapSizeQuantites on productSizeQuantityOutsideStock', () => {
    expect(COUNTABLE.QUANTITY_OUTSIDE).toEqual('productSizeQuantityOutsideStock');
    const quantities = distUtils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.QUANTITY_OUTSIDE)
    expect(quantities).toEqual({"3":0,"4":0,"5":5,"6":0});
})

test('Utils mapSizeQuantites on productSizeQuantityAllStocks', () => {
    expect(COUNTABLE.QUANTITY_ALL).toEqual('productSizeQuantityAllStocks');
    const quantities = distUtils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.QUANTITY_ALL)
    expect(quantities).toEqual({"3":8,"4":10,"5":5,"6":0});
})

test('Utils mapSizeQuantites on productOrdersUnfinishedQuantities', () => {
    expect(COUNTABLE.QUANTITY_ORDERS_UNFINISHED).toEqual('productOrdersUnfinishedQuantities');
    const quantities = distUtils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.QUANTITY_ORDERS_UNFINISHED)
    expect(quantities).toEqual({"3":2});
})

test('Utils mapSizeQuantites on productSizesDeliveries', () => {
    expect(COUNTABLE.DELIVERIES).toEqual('productSizesDeliveries');
    const quantities = distUtils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.DELIVERIES)
    expect(quantities).toEqual({"5":3,"6":3});
})

test('Utils mapSizeQuantites on productSizesDispositionsInAuctions', () => {
    expect(COUNTABLE.AUCTIONS).toEqual('productSizesDispositionsInAuctions');
    const quantities = distUtils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.AUCTIONS)
    expect(quantities).toEqual({"3":1,"4":0,"5":0,"6":0});
})