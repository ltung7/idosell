import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getPaymentsFormsActiveOnly", () => {
    const params = idosell().getPaymentsForms.activeOnly("yes").checkParams();
    expect(params).toEqual({"activeOnly":"yes"});
})