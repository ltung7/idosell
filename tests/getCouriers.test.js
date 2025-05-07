import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getCouriersCountryCode", () => {
    const params = idosell().getCouriers.countryCode("PL").getParams();
    expect(params).toEqual({"countryCode":"PL"});
})

test("getCouriersPage", () => {
    const params = idosell().getCouriers.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})