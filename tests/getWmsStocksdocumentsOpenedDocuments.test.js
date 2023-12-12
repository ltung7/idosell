import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getWmsStocksdocumentsOpenedDocumentsType", () => {
    const params = idosell().getWmsStocksdocumentsOpenedDocuments.type("pz").getParams();
    expect(params).toEqual({"type":"pz"});
})

test("getWmsStocksdocumentsOpenedDocumentsStatus", () => {
    const params = idosell().getWmsStocksdocumentsOpenedDocuments.status("open").getParams();
    expect(params).toEqual({"status":"open"});
})

test("getWmsStocksdocumentsOpenedDocumentsPage", () => {
    const params = idosell().getWmsStocksdocumentsOpenedDocuments.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})