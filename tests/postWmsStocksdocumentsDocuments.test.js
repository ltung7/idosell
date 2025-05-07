import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postWmsStocksdocumentsDocumentsStockId", () => {
    const params = idosell().postWmsStocksdocumentsDocuments.type("pz").stockId(1).getParams();
    expect(params).toEqual({"type":"pz","stockId":1});
})