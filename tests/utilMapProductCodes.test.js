import distUtils from '$dist/utils.ts';
import { expect, test } from "vitest"
import { STOCK_PRODUCT } from "./util.data";
import ENUMS from '$dist/enums';

const CODES = ENUMS.PRODUCT_SIZE_CODES;

test('Utils mapProductCodes on sizePanelName', () => {
    expect(CODES.NAME).toEqual('sizePanelName');
    const codes = distUtils.mapProductCodes(STOCK_PRODUCT, CODES.NAME)
    expect(codes).toEqual({"3": "S","4": "M","5": "L","6": "XL"});
})

test('Utils mapProductCodes on productSizeCodeProducer', () => {
    expect(CODES.CODE_PRODUCER).toEqual('productSizeCodeProducer');
    const codes = distUtils.mapProductCodes(STOCK_PRODUCT, CODES.CODE_PRODUCER)
    expect(codes).toEqual({"3": "1234567890128","4": "1234567890135","5": "1234567890142","6": "1234567890159"});
})

test('Utils mapProductCodes on productSizeCodeExternal', () => {
    expect(CODES.CODE_EXTERNAL).toEqual('productSizeCodeExternal');
    const codes = distUtils.mapProductCodes(STOCK_PRODUCT, CODES.CODE_EXTERNAL)
    expect(codes).toEqual({"3": "PX-ZERO-S","4": "PX-ZERO-M","5": "PX-ZERO-L","6": "PX-ZERO-X"});
})