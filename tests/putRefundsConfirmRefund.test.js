import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putRefundsConfirmRefundPaymentId", () => {
    const params = idosell().putRefundsConfirmRefund.sourceType("order").sourceId(3).paymentId(4).getParams();
    expect(params).toEqual({"sourceType":"order","sourceId":3,"paymentId":4});
})