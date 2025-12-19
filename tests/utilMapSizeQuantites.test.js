import { ENUMS, utils } from '../dist/index';
import { expect, test } from "vitest"
import { STOCK_PRODUCT } from './utilTestData';

const COUNTABLE = ENUMS.PRODUCT_SIZE_COUNTABLE;
const INDEX = ENUMS.PRODUCE_SIZE_INDEX;

test('Utils mapSizeQuantites on productSizeQuantity', () => {
    expect(COUNTABLE.QUANTITY).toEqual('productSizeQuantity');
    const quantities = utils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.QUANTITY)
    expect(quantities).toEqual({"3":10,"4":10,"5":0,"6":0});
})

test('Utils mapSizeQuantites on productSizeQuantity by IAI code', () => {
    expect(COUNTABLE.QUANTITY).toEqual('productSizeQuantity');
    const quantities = utils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.QUANTITY, INDEX.IAI_CODE)
    expect(quantities).toEqual({"1234-3":10,"1234-4":10,"1234-5":0,"1234-6":0});
})

test('Utils mapSizeQuantites on productSizeQuantity by size name', () => {
    expect(COUNTABLE.QUANTITY).toEqual('productSizeQuantity');
    const quantities = utils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.QUANTITY, INDEX.NAME)
    expect(quantities).toEqual({"S":10,"M":10,"L":0,"XL":0});
})

test('Utils mapSizeQuantites on productSizeQuantityOwnStock', () => {
    expect(COUNTABLE.QUANTITY_OWN).toEqual('productSizeQuantityOwnStock');
    const quantities = utils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.QUANTITY_OWN)
    expect(quantities).toEqual({"3":8,"4":10,"5":0,"6":0});
})

test('Utils mapSizeQuantites on productSizeQuantityOutsideStock', () => {
    expect(COUNTABLE.QUANTITY_OUTSIDE).toEqual('productSizeQuantityOutsideStock');
    const quantities = utils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.QUANTITY_OUTSIDE)
    expect(quantities).toEqual({"3":0,"4":0,"5":5,"6":0});
})

test('Utils mapSizeQuantites on productSizeQuantityAllStocks', () => {
    expect(COUNTABLE.QUANTITY_ALL).toEqual('productSizeQuantityAllStocks');
    const quantities = utils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.QUANTITY_ALL)
    expect(quantities).toEqual({"3":8,"4":10,"5":5,"6":0});
})

test('Utils mapSizeQuantites on productOrdersUnfinishedQuantities', () => {
    expect(COUNTABLE.QUANTITY_UNFINISHED).toEqual('productOrdersUnfinishedQuantities');
    const quantities = utils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.QUANTITY_UNFINISHED)
    expect(quantities).toEqual({"3":2});
})

test('Utils mapSizeQuantites on productSizesDeliveries', () => {
    expect(COUNTABLE.DELIVERIES).toEqual('productSizesDeliveries');
    const quantities = utils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.DELIVERIES)
    expect(quantities).toEqual({"5":3,"6":3});
})

test('Utils mapSizeQuantites on productSizesDispositionsInAuctions', () => {
    expect(COUNTABLE.AUCTIONS).toEqual('productSizesDispositionsInAuctions');
    const quantities = utils.mapSizeQuantites(STOCK_PRODUCT, COUNTABLE.AUCTIONS)
    expect(quantities).toEqual({"3":1,"4":0,"5":0,"6":0});
})