import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteConfigVariablesItem", () => {
    const params = idosell().deleteConfigVariables.type("snippets_campaign").item(1).getParams();
    expect(params).toEqual({"type":"snippets_campaign","item":1});
})