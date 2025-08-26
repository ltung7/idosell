import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postOrdersDocumentsCreateActualize", () => {
    const params = idosell().postOrdersDocumentsCreate.orderSerialNumbers([15]).documentType("vat_invoice").actualize(false).checkParams();
    expect(params).toEqual({"orderSerialNumbers":[15],"documentType":"vat_invoice","actualize":false});
})