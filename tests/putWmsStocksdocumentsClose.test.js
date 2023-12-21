import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putWmsStocksdocumentsCloseId", () => {
    const params = idosell().putWmsStocksdocumentsClose.type("mm").id(6).getParams();
    expect(params).toEqual({"type":"mm","id":6});
})