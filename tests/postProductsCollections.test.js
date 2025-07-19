import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postProductsCollectionsProducts", () => {
    const params = idosell().postProductsCollections.products({"productId":55,"addType":"allSizesWithVariants","quantity":1}).checkParams();
    expect(params).toEqual({"params":[{"products":{"productId":55,"addType":"allSizesWithVariants","quantity":1}}]});
})