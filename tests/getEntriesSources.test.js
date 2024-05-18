import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getEntriesSourcesType", () => {
    const params = idosell().getEntriesSources.type("search").getParams();
    expect(params).toEqual({"type":"search"});
})