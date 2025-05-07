import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getConfigVariables", () => {
    const params = idosell().getConfigVariables.type("snippets_campaign").getParams()
    expect(params).toEqual({"type":'snippets_campaign'});
})