import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putPaymentsValue", () => {
    const params = idosell().putPayments.sourceType("order").paymentNumber("3-3").value(10).getParams();
    expect(params).toEqual({"sourceType":"order","paymentNumber":"3-3","value":10});
})