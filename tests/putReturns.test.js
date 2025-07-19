import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putReturnsStatus", () => {
    const params = idosell().putReturns.id(2).status(2).checkParams();
    expect(params).toEqual({"returns":[{"id":2,"status":2}]});
})