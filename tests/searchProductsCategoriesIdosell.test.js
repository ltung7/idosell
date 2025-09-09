import idosell from "./dist/index"
import { expect, test } from "vitest"

test("searchProductsCategoriesIdosellLanguagesIds", () => {
    const params = idosell().searchProductsCategoriesIdosell.languagesIds(["pol"]).checkParams();
    expect(params).toEqual({"languagesIds":["pol"]});
})

test("searchProductsCategoriesIdosellPage", () => {
    const params = idosell().searchProductsCategoriesIdosell.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("searchProductsCategoriesIdosellCategoriesIdoSellNames", () => {
    const params = idosell().searchProductsCategoriesIdosell.categoriesIdoSellNames(["Lornetki"]).checkParams();
    expect(params).toEqual({"categoriesIdoSellNames":["Lornetki"]});
})

test("searchProductsCategoriesIdosellCategoriesIdoSellIds", () => {
    const params = idosell().searchProductsCategoriesIdosell.categoriesIdoSellIds(1).checkParams();
    expect(params).toEqual({"categoriesIdoSellIds":[1]});
})