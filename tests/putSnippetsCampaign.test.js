import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putSnippetsCampaignName", () => {
    const params = idosell().putSnippetsCampaign.id(1).name("campaign").checkParams();
    expect(params).toEqual({"campaigns":[{"id":1,"name":"campaign"}]});
})