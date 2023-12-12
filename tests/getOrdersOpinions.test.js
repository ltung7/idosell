import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getOrdersOpinionsPage", () => {
    const params = idosell().getOrdersOpinions.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("getOrdersOpinionsOrderBy", () => {
    const params = idosell().getOrdersOpinions.orderBy("rating", false).getParams();
    expect(params).toEqual({"ordersBy":[{"elementName":"rating","sortDirection":"ASC"}]});
})