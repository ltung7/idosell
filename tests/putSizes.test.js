import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putSizesName", () => {
    const params = idosell().putSizes.id("W").operation("add").name("512GB").checkParams();
    expect(params).toEqual({"sizes":[{"id":"W","name":"512GB","operation":"add"}]});
})

test("putSizesOperation", () => {
    const params = idosell().putSizes.id("W").name("512GB").description("512GB").operation("edit").checkParams();
    expect(params).toEqual({"sizes":[{"id":"W","name":"512GB","description":"512GB","operation":"edit"}]});
})