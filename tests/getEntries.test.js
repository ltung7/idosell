import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getEntriesLangId", () => {
    const params = idosell().getEntries.langId("pol").getParams();
    expect(params).toEqual({"langId":"pol"});
})

test("getEntriesEntryId", () => {
    const params = idosell().getEntries.entryId(1308134131).getParams();
    expect(params).toEqual({"entryId":1308134131});
})