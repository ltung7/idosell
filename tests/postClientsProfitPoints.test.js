import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postClientsProfitPointsScore", () => {
    const params = idosell().postClientsProfitPoints.client_id(3).operation("add").score(10).checkParams();
    expect(params).toEqual({"client_id":3,"operation":"add","score":10});
})