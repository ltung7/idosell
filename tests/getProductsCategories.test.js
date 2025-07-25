import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsCategoriesLanguages", () => {
    const params = idosell().getProductsCategories.languages(["pol"]).checkParams();
    expect(params).toEqual({"languages":["pol"]});
})

test("getProductsCategoriesPage", () => {
    const params = idosell().getProductsCategories.page(2,10).checkParams();
    expect(params).toEqual({"results_page":2,"results_limit":10});
})

test("getProductsCategoriesIds", () => {
    const params = idosell().getProductsCategories.ids([1214553885]).checkParams();
    expect(params).toEqual({"ids":[1214553885]});
})