import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putProductsCollectionsProductsProducts", () => {
    const params = idosell().putProductsCollectionsProducts.collectionId(69).products([{"productId":49,"quantity":2}]).getParams();
    expect(params).toEqual({"params":[{"collectionId":69,"products":[{"productId":49,"quantity":2}]}]});
})