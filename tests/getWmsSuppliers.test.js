import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getWmsSuppliersPage", () => {
    const params = idosell().getWmsSuppliers.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("getWmsSuppliersIds", () => {
    const params = idosell().getWmsSuppliers.ids([2,4,6]).checkParams();
    expect(params).toEqual({"ids":[2,4,6]});
})

test("getWmsSuppliersReturnProductsCount", () => {
    const params = idosell().getWmsSuppliers.returnProductsCount(true).checkParams();
    expect(params).toEqual({"returnProductsCount":true});
})