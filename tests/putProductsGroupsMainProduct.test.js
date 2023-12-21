import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putProductsGroupsMainProductProductIdent", () => {
    const params = idosell().putProductsGroupsMainProduct.productIdent({"productIdentType":"id","identValue":"33"}).getParams();
    expect(params).toEqual({"groups":[{"productIdent":{"productIdentType":"id","identValue":"33"}}]});
})