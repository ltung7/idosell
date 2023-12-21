import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putRefundsUpdateRefundRefundCurrency", () => {
    const params = idosell().putRefundsUpdateRefund.sourceType("order").sourceId(3).paymentId(5).refundValue(15).refundCurrency("PLN").getParams();
    expect(params).toEqual({"sourceType":"order","sourceId":3,"paymentId":5,"refundValue":15,"refundCurrency":"PLN"});
})