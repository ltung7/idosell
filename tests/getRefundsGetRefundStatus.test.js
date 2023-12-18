import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getRefundsGetRefundStatusPaymentId", () => {
    const params = idosell().getRefundsGetRefundStatus.sourceId(1).sourceType("return").paymentId("1-1").getParams();
    expect(params).toEqual({"sourceId":1,"sourceType":"return","paymentId":"1-1"});
})