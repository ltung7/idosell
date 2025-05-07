import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsSeriesReturn_last_changed_time", () => {
    const params = idosell().getProductsSeries.return_last_changed_time("y").getParams();
    expect(params).toEqual({"return_last_changed_time":"y"});
})

test("getProductsSeriesIds", () => {
    const params = idosell().getProductsSeries.ids([3]).getParams();
    expect(params).toEqual({"ids":[3]});
})

test("getProductsSeriesLanguagesIds", () => {
    const params = idosell().getProductsSeries.languagesIds(["pol"]).getParams();
    expect(params).toEqual({"languagesIds":["pol"]});
})

test("getProductsSeriesPage", () => {
    const params = idosell().getProductsSeries.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})