import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersHandlerOrderSerialNumber", () => {
    const params = idosell().getOrdersHandler.orderSerialNumber(3083).checkParams();
    expect(params).toEqual({"orderSerialNumber":3083});
})