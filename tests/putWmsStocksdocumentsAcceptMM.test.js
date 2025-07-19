import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putWmsStocksdocumentsAcceptMMId", () => {
    const params = idosell().putWmsStocksdocumentsAcceptMM.id(6).checkParams();
    expect(params).toEqual({"id":6});
})