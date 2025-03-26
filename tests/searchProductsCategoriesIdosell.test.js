import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("searchProductsCategoriesIdosellPage", () => {
    const params = idosell().searchProductsCategoriesIdosell.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})