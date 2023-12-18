import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postDiscountsGroupsDiscountGroupName", () => {
    const params = idosell().postDiscountsGroups.discountGroupName("gr1").getParams();
    expect(params).toEqual({"discountGroupName":"gr1"});
})