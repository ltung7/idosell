import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putProductsCollectionsRenewProducts", () => {
    const params = idosell().putProductsCollectionsRenew.collectionIdent({"collectionIdentType":"id","collectionId":"69"}).products([{"productIdent":{"productId":"13","productIdentType":"id"},"addType":"allSizes","quantity":1}]).getParams();
    expect(params).toEqual({"params":[{"collectionIdent":{"collectionIdentType":"id","collectionId":"69"},"products":[{"productIdent":{"productId":"13","productIdentType":"id"},"addType":"allSizes","quantity":1}]}]});
})