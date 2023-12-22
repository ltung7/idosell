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

test("getWmsStocksdocumentsDocumentsDates", () => {
    const params = idosell().getWmsStocksdocumentsDocuments.stockDocumentType("pz").dates("2023-12-18", "2023-12-31", "open").getParams();
    expect(params).toEqual({"stockDocumentType":"pz","dateObject":{"dateBegin":"2023-12-18 00:00:00","dateEnd":"2023-12-31 23:59:59","dateType":"open"}});
})