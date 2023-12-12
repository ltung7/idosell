import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getOrdersOpinionsRateOperation", () => {
    const params = idosell().getOrdersOpinionsRate.operation("positive").getParams();
    expect(params).toEqual({"operation":"positive"});
})