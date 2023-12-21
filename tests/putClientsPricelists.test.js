import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putClientsPricelistsPriceListName", () => {
    const params = idosell().putClientsPricelists.priceListId(200).priceListName("customprice").getParams();
    expect(params).toEqual({"priceListId":200,"priceListName":"customprice"});
})