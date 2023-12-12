import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsSizesResult::page", () => {
    const params = idosell().getProductsSizes['result::page'](123).getParams();
    expect(params).toEqual({"result::page":123});
})