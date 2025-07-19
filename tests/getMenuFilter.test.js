import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getMenuFilterLanguageId", () => {
    const params = idosell().getMenuFilter.languageId("pol").checkParams();
    expect(params).toEqual({"languageId":"pol"});
})