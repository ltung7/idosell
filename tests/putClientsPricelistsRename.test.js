import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putClientsPricelistsRenamePriceListName", () => {
    const params = idosell().putClientsPricelistsRename.priceListId(200).priceListName("pricing2").checkParams();
    expect(params).toEqual({"priceListId":200,"priceListName":"pricing2"});
})