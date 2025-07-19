import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getEntriesPagesToDisplayLangId", () => {
    const params = idosell().getEntriesPagesToDisplay.langId("pol").checkParams();
    expect(params).toEqual({"langId":"pol"});
})