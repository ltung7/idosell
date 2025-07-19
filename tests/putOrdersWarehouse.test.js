import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putOrdersWarehouseStockId", () => {
    const params = idosell().putOrdersWarehouse.orderSerialNumber(3).stockId(2).checkParams();
    expect(params).toEqual({"orderSerialNumber":3,"stockId":2});
})