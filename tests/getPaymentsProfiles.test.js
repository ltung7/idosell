import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getPaymentsProfilesPage", () => {
    const params = idosell().getPaymentsProfiles.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})