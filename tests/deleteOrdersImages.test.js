import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteOrdersImagesId", () => {
    const params = idosell().deleteOrdersImages.order({"orderSerialNumber": 9}).id(4).checkParams();
    expect(params).toEqual({"order":{"orderSerialNumber":9},"images":[{"id":4}]});
})