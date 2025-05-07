import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsOmnibusPricesOmnibusPrices", () => {
    const params = idosell().putProductsOmnibusPrices.ident({"type":"id","value":"33"}).omnibusPrices({"omnibusPriceRetail":299}).getParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":"33"},"omnibusPrices":{"omnibusPriceRetail":299}}]});
})