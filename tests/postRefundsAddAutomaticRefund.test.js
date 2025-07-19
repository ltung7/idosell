import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postRefundsAddAutomaticRefundSourceType", () => {
    const params = idosell().postRefundsAddAutomaticRefund.sourceId(1).sourceType("return").checkParams();
    expect(params).toEqual({"sourceId":1,"sourceType":"return"});
})