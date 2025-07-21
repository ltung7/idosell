import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersExportdocumentsJPK_MAG", () => {
    const params = idosell().getOrdersExportdocumentsJPK.documentType("JPK_MAG").dateBegin("2023-12-01").dateEnd("2023-12-31").stockId([1]).currency("PLN").checkParams();
    expect(params).toEqual({"documentType":"JPK_MAG","dateBegin":"2023-12-01","dateEnd":"2023-12-31","stockId":[1],"currency":"PLN"});
})

test("getOrdersExportdocumentsJPK", () => {
    const params = idosell().getOrdersExportdocumentsJPK.documentType("JPK_FA").dateBegin("2023-12-01").dateEnd("2023-12-31").currency("PLN").checkParams();
    expect(params).toEqual({"documentType":"JPK_FA","dateBegin":"2023-12-01","dateEnd":"2023-12-31","currency":"PLN"});
})

test("getOrdersExportdocumentsJPKDates", () => {
    const params = idosell().getOrdersExportdocumentsJPK.documentType("JPK_MAG").currency("abcdefg").stockId([1,2,3]).dates("2023-12-01", "2023-12-31").checkParams();
    expect(params).toEqual({"documentType":"JPK_MAG","currency":"abcdefg","stockId":[1,2,3],"dateBegin":"2023-12-01","dateEnd":"2023-12-31"});
})