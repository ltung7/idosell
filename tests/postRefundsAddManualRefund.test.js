import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postRefundsAddManualRefundRefundDetails", () => {
    const params = idosell().postRefundsAddManualRefund.sourceType("order").sourceId(9).refundValue(100).refundCurrency("PLN").refundDetails({"paymentFormId": 0,"paymentSystem": 27}).checkParams();
    expect(params).toEqual({"sourceType":"order","sourceId":9,"refundValue":100,"refundCurrency":"PLN","refundDetails":{"paymentFormId":0,"paymentSystem":27}});
})