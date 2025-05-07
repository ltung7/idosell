import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putCpaName", () => {
    const params = idosell().putCpa.id(2).name("maincps").getParams();
    expect(params).toEqual({"cpa":[{"id":2,"name":"maincps"}]});
})