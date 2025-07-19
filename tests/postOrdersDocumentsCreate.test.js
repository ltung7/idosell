import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postOrdersDocumentsCreateActualize", () => {
    const params = idosell().postOrdersDocumentsCreate.orderSerialNumbers([86]).documentType("vat_invoice").actualize(false).checkParams();
    expect(params).toEqual({"orderSerialNumbers":[86],"documentType":"vat_invoice","actualize":false});
})