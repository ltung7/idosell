import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsSKUbyBarcodeProductIndices", () => {
    const params = idosell().getProductsSKUbyBarcode.productIndices(["TIN-B1P3", "5904507908904"]).checkParams();
    expect(params).toEqual({"productIndices":["TIN-B1P3","5904507908904"]});
})