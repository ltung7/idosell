import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postProductsCollectionsProducts", () => {
    const params = idosell().postProductsCollections.products({"productId":55,"addType":"allSizesWithVariants","quantity":1}).getParams();
    expect(params).toEqual({"params":[{"products":{"productId":55,"addType":"allSizesWithVariants","quantity":1}}]});
})