import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getDeliveriesProfilesPage", () => {
    const params = idosell().getDeliveriesProfiles.page(0,3).getParams();
    expect(params).toEqual({"resultsPage":0,"resultsLimit":3});
})