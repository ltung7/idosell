import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putPaymentsConfirmPaymentNumber", () => {
    const params = idosell().putPaymentsConfirm.sourceType("order").paymentNumber("3-2").checkParams();
    expect(params).toEqual({"sourceType":"order","paymentNumber":"3-2"});
})