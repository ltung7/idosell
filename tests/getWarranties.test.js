import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getWarrantiesWarranty_ids", () => {
    const params = idosell().getWarranties.warranty_ids(["1", "2", "3"]).checkParams();
    expect(params).toEqual({"warranty_ids":["1","2","3"]});
})

test("getWarrantiesPage", () => {
    const params = idosell().getWarranties.page(2,10).checkParams();
    expect(params).toEqual({"results_page":2,"results_limit":10});
})