import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putProductsGroupsOrderProductsInOrder", () => {
    const params = idosell().putProductsGroupsOrder.productsInOrder([{"productIdent":{"productIdentType":"id","identValue":"33"},"priority":1},{"productIdent":{"productIdentType":"id","identValue":"44"},"priority":2},{"productIdent":{"productIdentType":"id","identValue":"48"},"priority":3}]).getParams();
    expect(params).toEqual({"groups":[{"productsInOrder":[{"productIdent":{"productIdentType":"id","identValue":"33"},"priority":1},{"productIdent":{"productIdentType":"id","identValue":"44"},"priority":2},{"productIdent":{"productIdentType":"id","identValue":"48"},"priority":3}]}]});
})

test("putProductsGroupsOrderProductIdsInOrder", () => {
    const params = idosell().putProductsGroupsOrder.productIdsInOrder([44,33]).getParams();
    expect(params).toEqual({"groups":[{"productsInOrder":[{"productIdent":{"productIdentType":"id","identValue":44},"priority":1},{"productIdent":{"productIdentType":"id","identValue":33},"priority":2}]}]});
})