import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsStrikethroughPricesProductOnlyId", () => {
    const params = idosell().getProductsStrikethroughPrices.productId(33).getParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":33}}]});
})

test("getProductsStrikethroughPricesProductSizeId", () => {
    const params = idosell().getProductsStrikethroughPrices.productId(15,4).getParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":15},"sizes":[{"ident":{"type":"id","value":4}}]}]});
})

test("getProductsStrikethroughPricesProducts", () => {
    const params = idosell().getProductsStrikethroughPrices.products([{"ident":{"type":"id","value":15},"sizes":[{"ident":{"type":"id","value":4}}]}]).getParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":15},"sizes":[{"ident":{"type":"id","value":4}}]}]});
})