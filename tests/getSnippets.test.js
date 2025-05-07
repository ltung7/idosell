import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getSnippetsCampaign", () => {
    const params = idosell().getSnippets.campaign(1).getParams();
    expect(params).toEqual({"campaign":1});
})