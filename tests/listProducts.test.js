import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("listProductsReturnElements", () => {
    const params = idosell().listProducts.returnElements(["code"]).getParams();
    expect(params).toEqual({"returnElements":["code"]});
})

test("listProductsDates", () => {
    const params = idosell().listProducts.dates("2023-12-01",  "2023-12-31", "finished").getParams();
    expect(params).toEqual({"productDate":{"productDateBegin":"2023-12-01","productDateEnd":"2023-12-31","productDateMode":"finished"}});
})

test("listProductsPage", () => {
    const params = idosell().listProducts.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("listProductsIds", () => {
    const params = idosell().listProducts.ids([9,10,17]).getParams();
    expect(params).toEqual({"productParams":[{"productId":9},{"productId":10},{"productId":17}]});
})