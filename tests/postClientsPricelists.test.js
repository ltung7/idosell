import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postClientsPricelistsPriceListName", () => {
    const params = idosell().postClientsPricelists.priceListName("pricing1").checkParams();
    expect(params).toEqual({"priceListName":"pricing1"});
})

test("postClientsPricelistsOnlyOrderProductsWithManuallySetPrices", () => {
    const params = idosell().postClientsPricelists.priceListName("pricing2").onlyOrderProductsWithManuallySetPrices("yes").checkParams();
    expect(params).toEqual({"priceListName":"pricing2","onlyOrderProductsWithManuallySetPrices":"yes"});
})