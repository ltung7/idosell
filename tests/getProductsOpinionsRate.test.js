import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsOpinionsRateOperation", () => {
    const params = idosell().getProductsOpinionsRate.operation("positive").checkParams();
    expect(params).toEqual({"operation":"positive"});
})