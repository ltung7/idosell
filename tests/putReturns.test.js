import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putReturnsStatus", () => {
    const params = idosell().putReturns.id(2).status(14).getParams();
    expect(params).toEqual({"returns":[{"id":2,"status":14}]});
})