import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putDiscountsGroupsDiscountGroupName", () => {
    const params = idosell().putDiscountsGroups.discountGroupId(201).discountGroupName("abcdefg").getParams();
    expect(params).toEqual({"discountGroupId":201,"discountGroupName":"abcdefg"});
})