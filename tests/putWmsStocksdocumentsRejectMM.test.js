import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putWmsStocksdocumentsRejectMMId", () => {
    const params = idosell().putWmsStocksdocumentsRejectMM.id(7).getParams();
    expect(params).toEqual({"id":7});
})