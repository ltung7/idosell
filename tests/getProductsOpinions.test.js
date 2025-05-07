import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsOpinionsOrderBy", () => {
    const params = idosell().getProductsOpinions.orderBy("rating").getParams();
    expect(params).toEqual({"ordersBy":[{"elementName":"rating","sortDirection":"DESC"}]});
})

test("getProductsOpinionsPage", () => {
    const params = idosell().getProductsOpinions.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("getProductsOpinionsDates", () => {
    const params = idosell().getProductsOpinions.dates("2023-01-01", 1672704000000).getParams();
    expect(params).toEqual({"dateRange":{"begin":"2023-01-01","end":"2023-01-03"}});
})