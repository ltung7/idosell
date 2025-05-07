import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postProductsCollectionsProductsProducts", () => {
    const params = idosell().postProductsCollectionsProducts.collectionId(54).products([{"productId":52,"addType":"allSizesWithVariants","quantity":1}]).getParams();
    expect(params).toEqual({"params":[{"collectionId":54,"products":[{"productId":52,"addType":"allSizesWithVariants","quantity":1}]}]});
})