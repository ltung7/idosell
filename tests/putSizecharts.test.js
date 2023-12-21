import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putSizechartsDisplayMode", () => {
    const params = idosell().putSizecharts.id(1).nameInPanel("Ubrania").displayMode("single").getParams();
    expect(params).toEqual({"sizeCharts":[{"id":1,"nameInPanel":"Ubrania","displayMode":"single"}]});
})