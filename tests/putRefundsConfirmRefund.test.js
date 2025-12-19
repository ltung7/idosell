import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putRefundsConfirmRefundPaymentId", () => {
    const params = idosell().putRefundsConfirmRefund.sourceType("order").sourceId(206).paymentId(4).checkParams();
    expect(params).toEqual({"sourceType":"order","sourceId":206,"paymentId":4});
})