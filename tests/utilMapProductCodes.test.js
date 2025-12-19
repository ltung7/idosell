import { ENUMS, utils } from '../dist/index';
import { expect, test } from "vitest"
import { STOCK_PRODUCT } from './utilTestData';

const CODES = ENUMS.PRODUCT_SIZE_CODES;
const INDEX = ENUMS.PRODUCE_SIZE_INDEX;

test('Utils mapProductCodes on sizePanelName', () => {
    expect(CODES.NAME).toEqual('sizePanelName');
    const codes = utils.mapProductCodes(STOCK_PRODUCT, CODES.NAME)
    expect(codes).toEqual({"3": "S","4": "M","5": "L","6": "XL"});
})

test('Utils mapProductCodes on productSizeCodeProducer', () => {
    expect(CODES.CODE_PRODUCER).toEqual('productSizeCodeProducer');
    const codes = utils.mapProductCodes(STOCK_PRODUCT, CODES.CODE_PRODUCER)
    expect(codes).toEqual({"3": "1234567890128","4": "1234567890135","5": "1234567890142","6": "1234567890159"});
})

test('Utils mapProductCodes on productSizeCodeExternal', () => {
    expect(CODES.CODE_EXTERNAL).toEqual('productSizeCodeExternal');
    const codes = utils.mapProductCodes(STOCK_PRODUCT, CODES.CODE_EXTERNAL)
    expect(codes).toEqual({"3": "PX-ZERO-S","4": "PX-ZERO-M","5": "PX-ZERO-L","6": "PX-ZERO-X"});
})

test('Utils mapProductCodes on sizePanelName by IAI code', () => {
    expect(CODES.NAME).toEqual('sizePanelName');
    const codes = utils.mapProductCodes(STOCK_PRODUCT, CODES.NAME, INDEX.IAI_CODE)
    expect(codes).toEqual({"1234-3":"S","1234-4":"M","1234-5":"L","1234-6":"XL"});
})

test('Utils mapProductCodes on productSizeCodeProducer by size name', () => {
    expect(CODES.NAME).toEqual('sizePanelName');
    const codes = utils.mapProductCodes(STOCK_PRODUCT, CODES.CODE_PRODUCER, INDEX.NAME)
    expect(codes).toEqual({"S":"1234567890128","M":"1234567890135","L":"1234567890142","XL":"1234567890159"});
})