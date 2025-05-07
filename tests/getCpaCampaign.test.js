import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getCpaCampaignId", () => {
    const params = idosell().getCpaCampaign.campaign(2).getParams();
    expect(params).toEqual({"campaign":2});
})

test("getCpaCampaignPage", () => {
    const params = idosell().getCpaCampaign.page(1,2).getParams();
    expect(params).toEqual({"resultsPage":1,"resultsLimit":2});
})