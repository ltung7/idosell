import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postPaymentsCancelPaymentNumber", () => {
    const params = idosell().postPaymentsCancel.sourceType("order").paymentNumber("9-1").checkParams();
    expect(params).toEqual({"sourceType":"order","paymentNumber":"9-1"});
})