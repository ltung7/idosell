import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putRmaRmaStatusId", () => {
    const params = idosell().putRma.rmaId(2).rmaStatusId(20).getParams();
    expect(params).toEqual({"rmas":[{"rmaId":2,"rmaStatusId":20}]});
})