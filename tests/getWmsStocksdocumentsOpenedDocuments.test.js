import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getWmsStocksdocumentsOpenedDocumentsType", () => {
    const params = idosell().getWmsStocksdocumentsOpenedDocuments.type("pz").checkParams();
    expect(params).toEqual({"type":"pz"});
})

test("getWmsStocksdocumentsOpenedDocumentsStatus", () => {
    const params = idosell().getWmsStocksdocumentsOpenedDocuments.status("open").checkParams();
    expect(params).toEqual({"status":"open"});
})

test("getWmsStocksdocumentsOpenedDocumentsPage", () => {
    const params = idosell().getWmsStocksdocumentsOpenedDocuments.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("getWmsStocksdocumentsOpenedDocumentsDates", () => {
    const params = idosell().getWmsStocksdocumentsOpenedDocuments.stockDocumentType("pz").dates("2023-12-18", "2023-12-31", "open").checkParams();
    expect(params).toEqual({"stockDocumentType":"pz","dateRange":{"dateBegin":"2023-12-18 00:00:00","dateEnd":"2023-12-31 23:59:59","dateType":"open"}});
})