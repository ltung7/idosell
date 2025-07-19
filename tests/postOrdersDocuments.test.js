import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postOrdersDocumentsName", () => {
    const params = idosell().postOrdersDocuments.orderSerialNumber(9).type("other").name("document").checkParams();
    expect(params).toEqual({"documents":[{"orderSerialNumber":9,"type":"other","name":"document"}]});
})