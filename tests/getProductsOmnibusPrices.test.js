import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsOmnibusPricesProductOnlyId", () => {
    const params = idosell().getProductsOmnibusPrices.productId(33).getParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":33}}]});
})

test("getProductsOmnibusPricesProductId", () => {
    const params = idosell().getProductsOmnibusPrices.productId(15,4).getParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":15},"sizes":[{"ident":{"type":"id","value":4}}]}]});
})

test("getProductsOmnibusPricesProducts", () => {
    const params = idosell().getProductsOmnibusPrices.products([{"ident":{"type":"id","value":15},"sizes":[{"ident":{"type":"id","value":4}}]}]).getParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":15},"sizes":[{"ident":{"type":"id","value":4}}]}]});
})