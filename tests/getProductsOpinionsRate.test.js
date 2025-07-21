import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsOpinionsRateOperation", () => {
    const params = idosell().getProductsOpinionsRate.id(1).operation("positive").checkParams();
    expect(params).toEqual({"operation":"positive","id":1});
})