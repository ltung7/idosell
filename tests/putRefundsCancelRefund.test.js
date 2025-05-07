import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putRefundsCancelRefundPaymentId", () => {
    const params = idosell().putRefundsCancelRefund.sourceType("order").sourceId(3).paymentId(6).getParams();
    expect(params).toEqual({"sourceType":"order","sourceId":3,"paymentId":6});
})