import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getCouriersCountryCode", () => {
    const params = idosell().getCouriers.countryCode("PL").checkParams();
    expect(params).toEqual({"countryCode":"PL"});
})


test("getCouriersPage", () => {
    const params = idosell().getCouriers.countryCode("PL").page(2,10).checkParams();
    expect(params).toEqual({"countryCode":"PL","resultsPage":2,"resultsLimit":10});
})