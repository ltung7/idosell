import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postOrdersDocumentsName", () => {
    const params = idosell().postOrdersDocuments.orderSerialNumber(9).type("other").name("document").getParams();
    expect(params).toEqual({"documents":[{"orderSerialNumber":9,"type":"other","name":"document"}]});
})