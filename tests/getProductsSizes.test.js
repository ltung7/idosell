import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsSizesResult::page", () => {
    const params = idosell().getProductsSizes["result::page"](123).checkParams();
    expect(params).toEqual({"result::page":123});
})