import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteProductsImagesProductImagesId", () => {
    const params = idosell().deleteProductsImages.productId(44).productImagesId(["44_6.jpg"]).getParams();
    expect(params).toEqual({"params":[{"productId":44,"productImagesId":["44_6.jpg"]}]});
})