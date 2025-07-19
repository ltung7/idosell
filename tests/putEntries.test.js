import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putEntriesVisible", () => {
    const params = idosell().putEntries.entryId(1308134189).date("2023-12-21").shopId(1).visible("n").checkParams();
    expect(params).toEqual({"entryId":1308134189,"date":"2023-12-21","shopId":1,"visible":"n"});
})