import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getWmsStocksdocumentsDocumentsStockDocumentType", () => {
    const params = idosell().getWmsStocksdocumentsDocuments.stockDocumentType("pz").getParams();
    expect(params).toEqual({"stockDocumentType":"pz"});
})

test("getWmsStocksdocumentsDocumentsStockDocumentStatus", () => {
    const params = idosell().getWmsStocksdocumentsDocuments.stockDocumentStatus("open").getParams();
    expect(params).toEqual({"stockDocumentStatus":"open"});
})

test("getWmsStocksdocumentsDocumentsPage", () => {
    const params = idosell().getWmsStocksdocumentsDocuments.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})