import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsDescriptionsIds", () => {
    const params = idosell().getProductsDescriptions.type("id").ids([9]).getParams();
    expect(params).toEqual({"type":"id","ids":[9]});
})

test("getProductsDescriptionsProductId", () => {
    const params = idosell().getProductsDescriptions.productId([30,31]).getParams();
    expect(params).toEqual({"type":"id","ids":[30,31]});
})