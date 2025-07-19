import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postSnippetsCampaign", () => {
    const params = idosell().postSnippets.name("snippet").campaign(2).checkParams();
    expect(params).toEqual({"snippets":[{"name":"snippet","campaign":2}]});
})