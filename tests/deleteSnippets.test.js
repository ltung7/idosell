import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteSnippetsId", () => {
    const params = idosell().deleteSnippets.id(1).checkParams();
    expect(params).toEqual({"id":1});
})