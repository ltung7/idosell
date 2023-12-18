import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postPaymentsType", () => {
    const params = idosell().postPayments.sourceId(9).sourceType("order").value(100).paymentFormId(5).type("payment").getParams();
    expect(params).toEqual({"sourceId":9,"sourceType":"order","value":100,"paymentFormId":5,"type":"payment"});
})