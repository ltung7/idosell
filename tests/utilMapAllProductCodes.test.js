import { ENUMS, utils } from '../dist/index';
import { expect, test } from "vitest"
import { STOCK_PRODUCT } from './utilTestData';


const INDEX = ENUMS.PRODUCE_SIZE_INDEX;

test('Utils mapAllProductCodes by ID', () => {
    const codes = utils.mapAllProductCodes(STOCK_PRODUCT, INDEX.ID)
    console.log(JSON.stringify(codes));
    expect(codes).toEqual({"3":["1234-3","1234567890128","PX-ZERO-S"],"4":["1234-4","1234567890135","PX-ZERO-M"],"5":["1234-5","1234567890142","PX-ZERO-L"],"6":["1234-6","1234567890159","PX-ZERO-X"]});
})

test('Utils mapAllProductCodes by IAI code', () => {
    const codes = utils.mapAllProductCodes(STOCK_PRODUCT, INDEX.IAI_CODE)
    console.log(JSON.stringify(codes));
    expect(codes).toEqual({"1234-3":["1234-3","1234567890128","PX-ZERO-S"],"1234-4":["1234-4","1234567890135","PX-ZERO-M"],"1234-5":["1234-5","1234567890142","PX-ZERO-L"],"1234-6":["1234-6","1234567890159","PX-ZERO-X"]});
})

test('Utils mapAllProductCodes by name', () => {
    const codes = utils.mapAllProductCodes(STOCK_PRODUCT, INDEX.NAME)
    console.log(JSON.stringify(codes));
    expect(codes).toEqual({"S":["1234-3","1234567890128","PX-ZERO-S"],"M":["1234-4","1234567890135","PX-ZERO-M"],"L":["1234-5","1234567890142","PX-ZERO-L"],"XL":["1234-6","1234567890159","PX-ZERO-X"]});
})