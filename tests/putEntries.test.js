import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putEntriesVisible", () => {
    const params = idosell().putEntries.entryId(1308134189).date("2023-12-21").shopId(1).visible("n").getParams();
    expect(params).toEqual({"entryId":1308134189,"date":"2023-12-21","shopId":1,"visible":"n"});
})