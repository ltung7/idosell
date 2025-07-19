import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersOpinionsRateOperation", () => {
    const params = idosell().getOrdersOpinionsRate.operation("positive").checkParams();
    expect(params).toEqual({"operation":"positive"});
})