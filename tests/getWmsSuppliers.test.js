import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getWmsSuppliersPage", () => {
    const params = idosell().getWmsSuppliers.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("getWmsSuppliersIds", () => {
    const params = idosell().getWmsSuppliers.ids([2,4,6]).getParams();
    expect(params).toEqual({"ids":[2,4,6]});
})

test("getWmsSuppliersReturnProductsCount", () => {
    const params = idosell().getWmsSuppliers.returnProductsCount(true).getParams();
    expect(params).toEqual({"returnProductsCount":true});
})