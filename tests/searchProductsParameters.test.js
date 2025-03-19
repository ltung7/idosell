import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsParametersIds", () => {
    const params = idosell().getProductsParameters.ids([123,456,789]).getParams();
    expect(params).toEqual({"ids":[123,456,789]});
})

test("getProductsParametersLanguagesIds", () => {
    const params = idosell().getProductsParameters.languagesIds(["pol"]).getParams();
    expect(params).toEqual({"languagesIds":["pol"]});
})

test("getProductsParametersPage", () => {
    const params = idosell().getProductsParameters.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})