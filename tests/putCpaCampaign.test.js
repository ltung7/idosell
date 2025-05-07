import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putCpaCampaignName", () => {
    const params = idosell().putCpaCampaign.id(2).name("cps").getParams();
    expect(params).toEqual({"campaigns":[{"id":2,"name":"cps"}]});
})