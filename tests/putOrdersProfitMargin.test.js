import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putOrdersProfitMarginProducts", () => {
    const params = idosell().putOrdersProfitMargin.orderSerialNumber(3).products([{"productIdent":{"identValue":"33","productIdentType":"id"},"sizeId":"uniw","productProfitMargin":12.3,"productProfitMarginNet":10}]).getParams();
    expect(params).toEqual({"orders":[{"orderSerialNumber":3,"products":[{"productIdent":{"identValue":"33","productIdentType":"id"},"sizeId":"uniw","productProfitMargin":12.3,"productProfitMarginNet":10}]}]});
})