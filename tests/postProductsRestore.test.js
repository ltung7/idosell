import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postProductsRestoreProductId", () => {
    const params = idosell().postProductsRestore.productId(44).getParams();
    expect(params).toEqual({"productId":44});
})