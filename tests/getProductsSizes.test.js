import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsSizesResult::page", () => {
    const params = idosell().getProductsSizes["result::page"](123).getParams();
    expect(params).toEqual({"result::page":123});
})

test("getProductsSizesPage", () => {
    const params = idosell().getProductsSizes.page(0,100).getParams();
    expect(params).toEqual({"result::page":0,"result::pageNumber":100});
})