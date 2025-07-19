import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putOrdersShippingCostsOrderDeliveryVat", () => {
    const params = idosell().putOrdersShippingCosts.orderSerialNumber(3).deliveryCost(10).orderDeliveryVat(23).checkParams();
    expect(params).toEqual({"orderSerialNumber":3,"deliveryCost":10,"orderDeliveryVat":23});
})