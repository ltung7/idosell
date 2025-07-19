import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteDiscountsGroupsDiscountGroupId", () => {
    const params = idosell().deleteDiscountsGroups.discountGroupId(201).checkParams();
    expect(params).toEqual({"discountGroupId":201});
})