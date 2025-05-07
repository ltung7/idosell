import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getPaymentsFormsActiveOnly", () => {
    const params = idosell().getPaymentsForms.activeOnly("yes").getParams();
    expect(params).toEqual({"activeOnly":"yes"});
})