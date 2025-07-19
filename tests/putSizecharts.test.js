import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putSizechartsDisplayMode", () => {
    const params = idosell().putSizecharts.id(1).nameInPanel("Ubrania").displayMode("single").checkParams();
    expect(params).toEqual({"sizeCharts":[{"id":1,"nameInPanel":"Ubrania","displayMode":"single"}]});
})