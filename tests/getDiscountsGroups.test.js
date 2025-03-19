import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getDiscountsGroupsGroup_numbers", () => {
    const params = idosell().getDiscountsGroups.group_numbers([97]).getParams();
    expect(params).toEqual({"group_numbers":[97]});
})

test("getDiscountsGroupsPage", () => {
    const params = idosell().getDiscountsGroups.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})