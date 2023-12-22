import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteWmsStocksdocumentsDocumentsId", () => {
    const params = idosell().deleteWmsStocksdocumentsDocuments.type("pz").id(2).getParams();
    expect(params).toEqual({"type":"pz","id":2});
})