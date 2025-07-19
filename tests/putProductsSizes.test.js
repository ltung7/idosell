import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsSizesSizes", () => {
    const params = idosell().putProductsSizes.mode("add").productId(13).sizes([{"sizeId": "9"}]).checkParams();
    expect(params).toEqual({"mode":"add","sizesProductsData":[{"productId":13,"sizes":[{"sizeId":"9"}]}]});
})