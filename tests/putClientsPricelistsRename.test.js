import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putClientsPricelistsRenamePriceListName", () => {
    const params = idosell().putClientsPricelistsRename.priceListId(200).priceListName("pricing2").getParams();
    expect(params).toEqual({"priceListId":200,"priceListName":"pricing2"});
})