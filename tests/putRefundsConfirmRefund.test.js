import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("putRefundsConfirmRefundPaymentId", () => {
    const params = idosell().putRefundsConfirmRefund.sourceType("order").sourceId(206).paymentId(4).getParams();
    expect(params).toEqual({"sourceType":"order","sourceId":206,"paymentId":4});
})