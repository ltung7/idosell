import distUtils from '$dist/utils.ts';
import { expect, test } from "vitest"
import { STOCK_PRODUCT } from "./util.data";
import { ENUMS } from '$dist';

const LOCATION = ENUMS.PRODUCT_SIZE_LOCATIONS;

test('Utils mapProductLocations on stockLocationCode', () => {
    expect(LOCATION.CODE).toEqual('stockLocationCode');
    const locations = distUtils.mapProductLocations(STOCK_PRODUCT, 1, LOCATION.CODE)
    expect(locations).toEqual({"3":["F","P","A"],"4":["F"],"5":["B"],"6":["B"]});
})

test('Utils mapProductLocations on stockLocationTextId', () => {
    expect(LOCATION.NAME).toEqual('stockLocationTextId');
    const locations = distUtils.mapProductLocations(STOCK_PRODUCT, 1, LOCATION.NAME)
    expect(locations).toEqual({"3":["M1\\A014","M1\\A015","M1\\A113"],"4":["M1\\A014"],"5":["M1\\B013"],"6":["M1\\B013"]});
})

test('Utils mapProductLocations on stockLocationId', () => {
    expect(LOCATION.ID).toEqual('stockLocationId');
    const locations = distUtils.mapProductLocations(STOCK_PRODUCT, 1, LOCATION.ID)
    expect(locations).toEqual({"3":["16","46","1"],"4":["16"],"5":["4"],"6":["4"]});
})

test('Utils mapProductLocations full', () => {
    const locations = distUtils.mapProductLocations(STOCK_PRODUCT)
    expect(locations).toEqual({"3":["M1\\A014","M1\\A015","M1\\A113","M2\\G013","M3\\K014"],"4":["M1\\A014","M2\\G015","M3\\L013"],"5":["M1\\B013","M2\\G114","M3\\L013"],"6":["M1\\B013","M2\\G214","M3\\K014"]});
})