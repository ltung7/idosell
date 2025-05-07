import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postCpaCampaign", () => {
    const params = idosell().postCpa.name("my-cpa").campaign(3).getParams();
    expect(params).toEqual({"cpa":[{"name":"my-cpa","campaign":3}]});
})