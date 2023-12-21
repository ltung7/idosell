import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putPaymentsConfirmPaymentNumber", () => {
    const params = idosell().putPaymentsConfirm.sourceType("order").paymentNumber("3-2").getParams();
    expect(params).toEqual({"sourceType":"order","paymentNumber":"3-2"});
})