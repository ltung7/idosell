import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putWmsStocksdocumentsDocumentsNote", () => {
    const params = idosell().putWmsStocksdocumentsDocuments.stockDocumentId(7).stockDocumentType("mm").note("note").checkParams();
    expect(params).toEqual({"stockDocumentId":7,"stockDocumentType":"mm","note":"note"});
})