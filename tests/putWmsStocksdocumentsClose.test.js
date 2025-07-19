import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putWmsStocksdocumentsCloseId", () => {
    const params = idosell().putWmsStocksdocumentsClose.type("mm").id(6).checkParams();
    expect(params).toEqual({"type":"mm","id":6});
})