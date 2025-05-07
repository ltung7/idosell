import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getEntriesPagesToDisplayLangId", () => {
    const params = idosell().getEntriesPagesToDisplay.langId("pol").getParams();
    expect(params).toEqual({"langId":"pol"});
})