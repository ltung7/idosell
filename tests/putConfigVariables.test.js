import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putConfigVariablesItemId", () => {
    const params = idosell().putConfigVariables.type("snippets_campaign").key("cpax").value("abcdefg").itemId(1).checkParams();
    expect(params).toEqual({"variables":[{"type":"snippets_campaign","key":"cpax","value":"abcdefg","itemId":1}]});
})