import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getPaymentsPaymentNumber", () => {
    const params = idosell().getPayments.paymentNumber("3532-1").getParams();
    expect(params).toEqual({"paymentNumber":"3532-1"});
})

test("getPaymentsSourceType", () => {
    const params = idosell().getPayments.sourceType("order").getParams();
    expect(params).toEqual({"sourceType":"order"});
})