import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteEntriesEntryId", () => {
    const params = idosell().deleteEntries.entryId(1176310652).getParams();
    expect(params).toEqual({"entryId":1176310652});
})