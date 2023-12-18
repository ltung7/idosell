import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postRefundsAddAutomaticRefundSourceType", () => {
    const params = idosell().postRefundsAddAutomaticRefund.sourceId(1).sourceType("return").getParams();
    expect(params).toEqual({"sourceId":1,"sourceType":"return"});
})