import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getOrdersExportdocumentsJPK_MAG", () => {
    const params = idosell().getOrdersExportdocumentsJPK.documentType("JPK_MAG").dateBegin("2023-12-01").dateEnd("2023-12-31").stockId([1]).getParams();
    expect(params).toEqual({"documentType":"JPK_MAG","dateBegin":"2023-12-01","dateEnd":"2023-12-31","stockId":[1]});
})

test("getOrdersExportdocumentsJPK", () => {
    const params = idosell().getOrdersExportdocumentsJPK.documentType("JPK_FA").dateBegin("2023-12-01").dateEnd("2023-12-31").currency("PLN").getParams();
    expect(params).toEqual({"documentType":"JPK_FA","dateBegin":"2023-12-01","dateEnd":"2023-12-31","currency":"PLN"});
})