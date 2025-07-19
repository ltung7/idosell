import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsGroupsMainProductProductIdent", () => {
    const params = idosell().putProductsGroupsMainProduct.productIdent({"productIdentType":"id","identValue":"33"}).checkParams();
    expect(params).toEqual({"groups":[{"productIdent":{"productIdentType":"id","identValue":"33"}}]});
})

test("putProductsGroupsMainProductProductId", () => {
    const params = idosell().putProductsGroupsMainProduct.productId(59).checkParams();
    expect(params).toEqual({"groups":[{"productIdent":{"productIdentType":"id","identValue":59}}]});
})