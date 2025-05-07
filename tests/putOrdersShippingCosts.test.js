import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putOrdersShippingCostsOrderDeliveryVat", () => {
    const params = idosell().putOrdersShippingCosts.orderSerialNumber(3).deliveryCost(10).orderDeliveryVat(23).getParams();
    expect(params).toEqual({"orderSerialNumber":3,"deliveryCost":10,"orderDeliveryVat":23});
})