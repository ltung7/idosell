import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getEntriesLangId", () => {
    const params = idosell().getEntries.langId("pol").checkParams();
    expect(params).toEqual({"langId":"pol"});
})

test("getEntriesEntryId", () => {
    const params = idosell().getEntries.entryId(1308134131).checkParams();
    expect(params).toEqual({"entryId":1308134131});
})