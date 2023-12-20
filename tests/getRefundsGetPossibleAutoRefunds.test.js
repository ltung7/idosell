import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getRefundsGetPossibleAutoRefundsSourceType", () => {
    const params = idosell().getRefundsGetPossibleAutoRefunds.sourceId(1).sourceType("return").getParams();
    expect(params).toEqual({"sourceId":1,"sourceType":"return"});
})