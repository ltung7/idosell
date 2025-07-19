import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postSnippetsCampaignShop", () => {
    const params = idosell().postSnippetsCampaign.name("camp").shop([1]).checkParams();
    expect(params).toEqual({"campaigns":[{"name":"camp","shop":[1]}]});
})