import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteWmsStocksdocumentsDocumentsId", () => {
    const params = idosell().deleteWmsStocksdocumentsDocuments.type("pz").id(2).checkParams();
    expect(params).toEqual({"type":"pz","id":2});
})