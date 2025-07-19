import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getSnippetsCampaignId", () => {
    const params = idosell().getSnippetsCampaign.id(1).checkParams();
    expect(params).toEqual({"id":1});
})