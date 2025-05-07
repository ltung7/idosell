import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteCpaId", () => {
    const params = idosell().deleteCpa.id(2).getParams();
    expect(params).toEqual({"id":2});
})