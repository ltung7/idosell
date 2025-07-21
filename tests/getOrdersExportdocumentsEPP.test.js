import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("getOrdersExportdocuments", () => {
    const params = idosell().getOrdersExportdocumentsEPP.dateBegin("2025-01-01").dateEnd("2025-01-31").applicationType("SubiektGT").documentType("all").checkParams();
    expect(params).toEqual({"dateBegin":"2025-01-01","dateEnd":"2025-01-31","applicationType":"SubiektGT","documentType":"all"});
})

test("getOrdersExportdocumentsEPPDates", () => {
    const params = idosell().getOrdersExportdocumentsEPP.applicationType("SubiektGT").documentType("all").dates("2023-01-01", 1672704000000).checkParams();
    expect(params).toEqual({"applicationType":"SubiektGT","documentType":"all","dateBegin":"2023-01-01","dateEnd":"2023-01-03"});
})