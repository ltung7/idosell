import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putSizesName", () => {
    const params = idosell().putSizes.id("W").name("512GB").getParams();
    expect(params).toEqual({"sizes":[{"id":"W","name":"512GB"}]});
})

test("putSizesOperation", () => {
    const params = idosell().putSizes.id("W").name("512GB").description("512GB").operation("edit").getParams();
    expect(params).toEqual({"sizes":[{"id":"W","name":"512GB","description":"512GB","operation":"edit"}]});
})