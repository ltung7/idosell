import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteCpaCampaignId", () => {
    const params = idosell().deleteCpaCampaign.id(2).getParams();
    expect(params).toEqual({"id":2});
})