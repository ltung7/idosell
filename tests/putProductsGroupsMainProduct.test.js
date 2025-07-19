import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsGroupsMainProductProductIdent", () => {
    const params = idosell().putProductsGroupsMainProduct.productIdent({"productIdentType":"id","identValue":"33"}).getParams();
    expect(params).toEqual({"groups":[{"productIdent":{"productIdentType":"id","identValue":"33"}}]});
})

test("putProductsGroupsMainProductProductId", () => {
    const params = idosell().putProductsGroupsMainProduct.productId(59).getParams();
    expect(params).toEqual({"groups":[{"productIdent":{"productIdentType":"id","identValue":59}}]});
})