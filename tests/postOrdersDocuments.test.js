import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postOrdersDocumentsName", () => {
    const params = idosell().postOrdersDocuments.orderSerialNumber(9).type("other").name("document").checkParams();
    expect(params).toEqual({"documents":[{"orderSerialNumber":9,"type":"other","name":"document"}]});
})

test("postOrdersDocumentsDate", () => {
    const params = idosell().postOrdersDocuments.orderSerialNumber(33).name("FAK123").date("2025-07-01").checkParams();
    expect(params).toEqual({"documents":[{"orderSerialNumber":33,"name":"FAK123","additionalData":{"documentIssuedDate":"2025-07-01"}}]});
})