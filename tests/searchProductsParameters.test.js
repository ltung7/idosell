import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("searchProductsParametersIds", () => {
    const params = idosell().searchProductsParameters.ids([123,456,789]).getParams();
    expect(params).toEqual({"ids":[123,456,789]});
})

test("searchProductsParametersLanguagesIds", () => {
    const params = idosell().searchProductsParameters.languagesIds(["pol"]).getParams();
    expect(params).toEqual({"languagesIds":["pol"]});
})

test("searchProductsParametersPage", () => {
    const params = idosell().searchProductsParameters.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})