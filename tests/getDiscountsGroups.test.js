import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getDiscountsGroupsGroup_numbers", () => {
    const params = idosell().getDiscountsGroups.group_numbers([97]).checkParams();
    expect(params).toEqual({"group_numbers":[97]});
})

test("getDiscountsGroupsPage", () => {
    const params = idosell().getDiscountsGroups.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})