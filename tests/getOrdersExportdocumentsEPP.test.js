import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getOrdersExportdocumentsEPPStocks", () => {
    const params = idosell().getOrdersExportdocumentsEPP.stocks([1,2,3]).getParams();
    expect(params).toEqual({"stocks":[1,2,3]});
})

test("getOrdersExportdocumentsEPPApplicationType", () => {
    const params = idosell().getOrdersExportdocumentsEPP.applicationType("SubiektGT").getParams();
    expect(params).toEqual({"applicationType":"SubiektGT"});
})

test("getOrdersExportdocumentsEPPDocumentType", () => {
    const params = idosell().getOrdersExportdocumentsEPP.documentType("all").getParams();
    expect(params).toEqual({"documentType":"all"});
})