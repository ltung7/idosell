import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersExportdocumentsEPPStocks", () => {
    const params = idosell().getOrdersExportdocumentsEPP.stocks([1,2,3]).checkParams();
    expect(params).toEqual({"stocks":[1,2,3]});
})

test("getOrdersExportdocumentsEPPApplicationType", () => {
    const params = idosell().getOrdersExportdocumentsEPP.applicationType("SubiektGT").checkParams();
    expect(params).toEqual({"applicationType":"SubiektGT"});
})

test("getOrdersExportdocumentsEPPDocumentType", () => {
    const params = idosell().getOrdersExportdocumentsEPP.documentType("all").checkParams();
    expect(params).toEqual({"documentType":"all"});
})

test("getOrdersExportdocumentsEPPDates", () => {
    const params = idosell().getOrdersExportdocumentsEPP.dates("2023-01-01", 1672704000000).checkParams();
    expect(params).toEqual({"dateBegin":"2023-01-01","dateEnd":"2023-01-03"});
})