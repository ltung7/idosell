import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsPricelistsPriceListIds", () => {
    const params = idosell().getClientsPricelists.priceListIds([4]).checkParams();
    expect(params).toEqual({"priceListIds":[4]});
})

test("getClientsPricelistsPage", () => {
    const params = idosell().getClientsPricelists.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})