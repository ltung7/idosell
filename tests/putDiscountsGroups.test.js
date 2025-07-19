import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putDiscountsGroupsDiscountGroupName", () => {
    const params = idosell().putDiscountsGroups.discountGroupId(201).discountGroupName("abcdefg").checkParams();
    expect(params).toEqual({"discountGroupId":201,"discountGroupName":"abcdefg"});
})