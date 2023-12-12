import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getClientsPricesDiscountGroupsClientDiscountGroupsNumbers", () => {
    const params = idosell().getClientsPricesDiscountGroups.clientDiscountGroupsNumbers([97]).getParams();
    expect(params).toEqual({"clientDiscountGroupsNumbers":[97]});
})

test("getClientsPricesDiscountGroupsPage", () => {
    const params = idosell().getClientsPricesDiscountGroups.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})