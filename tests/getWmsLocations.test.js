import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getWmsLocationsStockId", () => {
    const params = idosell().getWmsLocations.stockId(1).checkParams();
    expect(params).toEqual({"stockId":1});
})

test("getWmsLocationsPage", () => {
    const params = idosell().getWmsLocations.stockId(1).page(2,10).checkParams();
    expect(params).toEqual({"stockId":1,"resultsPage":2,"resultsLimit":10});
})