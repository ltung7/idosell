import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postPaymentsCashbackPaymentNumber", () => {
    const params = idosell().postPaymentsCashback.value(100).paymentNumber("9-2").getParams();
    expect(params).toEqual({"value":100,"paymentNumber":"9-2"});
})