import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getRefundsGetPossibleAutoRefundsSourceType", () => {
    const params = idosell().getRefundsGetPossibleAutoRefunds.sourceId(1).sourceType("return").checkParams();
    expect(params).toEqual({"sourceId":1,"sourceType":"return"});
})