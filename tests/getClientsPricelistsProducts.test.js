import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getClientsPricelistsProductsPriceListId", () => {
    const params = idosell().getClientsPricelistsProducts.priceListId(4).getParams();
    expect(params).toEqual({"priceListId":4});
})

test("getClientsPricelistsProductsPage", () => {
    const params = idosell().getClientsPricelistsProducts.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})