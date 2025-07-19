import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putClientsPricelistsPriceListName", () => {
    const params = idosell().putClientsPricelists.priceListId(200).priceListName("customprice").checkParams();
    expect(params).toEqual({"priceListId":200,"priceListName":"customprice"});
})