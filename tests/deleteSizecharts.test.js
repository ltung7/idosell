import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteSizechartsIds", () => {
    const params = idosell().deleteSizecharts.ids([6]).getParams();
    expect(params).toEqual({"ids":[6]});
})