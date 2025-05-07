import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postCpaCampaignShop", () => {
    const params = idosell().postCpaCampaign.name("cpa-campaign").shop([1]).getParams();
    expect(params).toEqual({"campaigns":[{"name":"cpa-campaign","shop":[1]}]});
})