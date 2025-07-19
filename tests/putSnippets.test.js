import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putSnippetsName", () => {
    const params = idosell().putSnippets.id(1).name("widget").checkParams();
    expect(params).toEqual({"snippets":[{"id":1,"name":"widget"}]});
})