import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersImagesImageId", () => {
    const params = idosell().getOrdersImages.imageId(1).checkParams();
    expect(params).toEqual({"imageId":1});
})