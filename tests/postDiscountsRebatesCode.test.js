import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postDiscountsRebatesCodeCode_number", () => {
    const params = idosell().postDiscountsRebatesCode.campaign_id(2).code_number("code").getParams();
    expect(params).toEqual({"campaign_id":2,"code_number":"code"});
})