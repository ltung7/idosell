import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getOrdersWarehouseOrderSerialNumber", () => {
    const params = idosell().getOrdersWarehouse.orderSerialNumber(123).getParams();
    expect(params).toEqual({"orderSerialNumber":123});
})