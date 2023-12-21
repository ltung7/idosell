import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putProductsSizesSizes", () => {
    const params = idosell().putProductsSizes.mode("add").productId(13).sizes([{"sizeId": "9"}]).getParams();
    expect(params).toEqual({"mode":"add","sizesProductsData":[{"productId":13,"sizes":[{"sizeId":"9"}]}]});
})