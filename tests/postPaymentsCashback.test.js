import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postPaymentsCashbackPaymentNumber", () => {
    const params = idosell().postPaymentsCashback.value(100).paymentNumber("9-2").checkParams();
    expect(params).toEqual({"value":100,"paymentNumber":"9-2"});
})