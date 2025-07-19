import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteProductsCollectionsProductsProducts", () => {
    const params = idosell().deleteProductsCollectionsProducts.collectionId(69).products([{"productId":33}]).checkParams();
    expect(params).toEqual({"params":[{"collectionId":69,"products":[{"productId":33}]}]});
})