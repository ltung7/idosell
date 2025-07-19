import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putRefundsUpdateRefundRefundCurrency", () => {
    const params = idosell().putRefundsUpdateRefund.sourceType("order").sourceId(3).paymentId(5).refundValue(15).refundCurrency("PLN").checkParams();
    expect(params).toEqual({"sourceType":"order","sourceId":3,"paymentId":5,"refundValue":15,"refundCurrency":"PLN"});
})