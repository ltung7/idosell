import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsCategoriesIdosellPage", () => {
    const params = idosell().getProductsCategoriesIdosell.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})