import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsPricesDiscountGroupsClientDiscountGroupsNumbers", () => {
    const params = idosell().getClientsPricesDiscountGroups.clientDiscountGroupsNumbers([97]).checkParams();
    expect(params).toEqual({"clientDiscountGroupsNumbers":[97]});
})

test("getClientsPricesDiscountGroupsPage", () => {
    const params = idosell().getClientsPricesDiscountGroups.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})