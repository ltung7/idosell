import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getSizechartsLanguages", () => {
    const params = idosell().getSizecharts.languages(["pol"]).getParams();
    expect(params).toEqual({"languages":["pol"]});
})

test("getSizechartsPage", () => {
    const params = idosell().getSizecharts.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("getSizechartsIds", () => {
    const params = idosell().getSizecharts.ids([1,2,3]).getParams();
    expect(params).toEqual({"ids":[1,2,3]});
})