import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersOpinionsRateId", () => {
    const params = idosell().getOrdersOpinionsRate.operation("positive").id(123).checkParams();
    expect(params).toEqual({"operation":"positive","id":123});
})