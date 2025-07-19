import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postProductsRestoreProductId", () => {
    const params = idosell().postProductsRestore.productId(44).checkParams();
    expect(params).toEqual({"productId":44});
})