import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getPayments", () => {
    const params = idosell().getPayments.paymentNumber("3532-1").sourceType("order").checkParams();
    expect(params).toEqual({"paymentNumber":"3532-1","sourceType":"order"});
})