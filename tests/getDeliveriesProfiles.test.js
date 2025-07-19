import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getDeliveriesProfilesPage", () => {
    const params = idosell().getDeliveriesProfiles.page(0,3).checkParams();
    expect(params).toEqual({"resultsPage":0,"resultsLimit":3});
})