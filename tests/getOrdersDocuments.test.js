import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersDocumentsDocumentType", () => {
    const params = idosell().getOrdersDocuments.orderSerialNumber(["9"]).documentType("sales_confirmation").getParams();
    expect(params).toEqual({"orderSerialNumber":["9"],"documentType":"sales_confirmation"});
})