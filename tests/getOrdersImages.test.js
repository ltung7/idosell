import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getOrdersImagesImageId", () => {
    const params = idosell().getOrdersImages.imageId(1).getParams();
    expect(params).toEqual({"imageId":1});
})