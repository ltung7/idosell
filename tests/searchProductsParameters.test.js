import idosell from "./dist/index"
import { expect, test } from "vitest"

test("searchProductsParametersIds", () => {
    const params = idosell().searchProductsParameters.ids([123,456,789]).checkParams();
    expect(params).toEqual({"ids":[123,456,789]});
})

test("searchProductsParametersLanguagesIds", () => {
    const params = idosell().searchProductsParameters.languagesIds(["pol"]).checkParams();
    expect(params).toEqual({"languagesIds":["pol"]});
})

test("searchProductsParametersPage", () => {
    const params = idosell().searchProductsParameters.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})