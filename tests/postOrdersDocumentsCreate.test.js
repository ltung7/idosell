import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postOrdersDocumentsCreateActualize", () => {
    const params = idosell().postOrdersDocumentsCreate.orderSerialNumbers([86]).documentType("vat_invoice").actualize(false).getParams();
    expect(params).toEqual({"orderSerialNumbers":[86],"documentType":"vat_invoice","actualize":false});
})