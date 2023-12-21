import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putWmsStocksdocumentsDocumentsNote", () => {
    const params = idosell().putWmsStocksdocumentsDocuments.stockDocumentId(7).stockDocumentType("mm").note("note").getParams();
    expect(params).toEqual({"stockDocumentId":7,"stockDocumentType":"mm","note":"note"});
})