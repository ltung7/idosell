import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postClientsPricelistsPriceListName", () => {
    const params = idosell().postClientsPricelists.priceListName("pricing1").getParams();
    expect(params).toEqual({"priceListName":"pricing1"});
})

test("postClientsPricelistsOnlyOrderProductsWithManuallySetPrices", () => {
    const params = idosell().postClientsPricelists.priceListName("pricing2").onlyOrderProductsWithManuallySetPrices("yes").getParams();
    expect(params).toEqual({"priceListName":"pricing2","onlyOrderProductsWithManuallySetPrices":"yes"});
})