import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postRefundsAddAutomaticRefundForOrderRefundValue", () => {
    const params = idosell().postRefundsAddAutomaticRefundForOrder.sourceId(1).paymentId("1-1").refundCurrency("PLN").refundValue(100).getParams();
    expect(params).toEqual({"sourceId":1,"paymentId":"1-1","refundCurrency":"PLN","refundValue":100});
})