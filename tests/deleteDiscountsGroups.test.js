import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteDiscountsGroupsDiscountGroupId", () => {
    const params = idosell().deleteDiscountsGroups.discountGroupId(201).getParams();
    expect(params).toEqual({"discountGroupId":201});
})