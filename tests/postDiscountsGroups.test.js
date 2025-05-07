import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postDiscountsGroupsDiscountGroupName", () => {
    const params = idosell().postDiscountsGroups.discountGroupName("gr1").getParams();
    expect(params).toEqual({"discountGroupName":"gr1"});
})