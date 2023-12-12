import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getWmsLocationsStockId", () => {
    const params = idosell().getWmsLocations.stockId(1).getParams();
    expect(params).toEqual({"stockId":1});
})

test("getWmsLocationsPage", () => {
    const params = idosell().getWmsLocations.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})