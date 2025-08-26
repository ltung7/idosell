import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getEntriesEntryId", () => {
    const params = idosell().getEntries.entryId(1308134131).langId('pol').checkParams();
    expect(params).toEqual({"entryId":1308134131,"langId":"pol"});
})