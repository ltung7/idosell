import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getDiscountsGroupsClientsDiscountGroupId", () => {
    const params = idosell().getDiscountsGroupsClients.discountGroupId(3).checkParams();
    expect(params).toEqual({"discountGroupId":3});
})