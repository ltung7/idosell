import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getWarrantiesWarranty_ids", () => {
    const params = idosell().getWarranties.warranty_ids(["1", "2", "3"]).getParams();
    expect(params).toEqual({"warranty_ids":["1","2","3"]});
})

test("getWarrantiesPage", () => {
    const params = idosell().getWarranties.page(2,10).getParams();
    expect(params).toEqual({"results_page":2,"results_limit":10});
})