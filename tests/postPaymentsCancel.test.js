import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postPaymentsCancelPaymentNumber", () => {
    const params = idosell().postPaymentsCancel.sourceType("order").paymentNumber("9-1").getParams();
    expect(params).toEqual({"sourceType":"order","paymentNumber":"9-1"});
})