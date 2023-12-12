import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsSKUbyBarcodeProductIndices", () => {
    const params = idosell().getProductsSKUbyBarcode.productIndices(["TIN-B1P3", "5904507908904"]).getParams();
    expect(params).toEqual({"productIndices":["TIN-B1P3","5904507908904"]});
})