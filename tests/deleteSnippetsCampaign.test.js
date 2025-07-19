import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteSnippetsCampaignId", () => {
    const params = idosell().deleteSnippetsCampaign.id(1).checkParams();
    expect(params).toEqual({"id":1});
})