import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsOpinionsRateOperation", () => {
    const params = idosell().getProductsOpinionsRate.operation("positive").getParams();
    expect(params).toEqual({"operation":"positive"});
})