import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteProductsSizesSizes", () => {
    const params = idosell().deleteProductsSizes.mode("delete_by_size").productId(49).sizes([{"sizeId": "2"}]).getParams();
    expect(params).toEqual({"mode":"delete_by_size","params":[{"productId":49,"sizes":[{"sizeId":"2"}]}]});
})