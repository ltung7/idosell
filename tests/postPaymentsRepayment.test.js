import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postPaymentsRepaymentPayment_form_id", () => {
    const params = idosell().postPaymentsRepayment.source_id(1).source_type("return").value(100).payment_form_id(27).getParams();
    expect(params).toEqual({"source_id":1,"source_type":"return","value":100,"payment_form_id":27});
})