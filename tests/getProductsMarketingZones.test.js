import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsMarketingZonesProductOnlyId", () => {
    const params = idosell().getProductsMarketingZones.productId(33).getParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":33}}]});
})

test("getProductsMarketingZonesSizeId", () => {
    const params = idosell().getProductsMarketingZones.productId(15,4).getParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":15},"sizes":[{"ident":{"type":"id","value":4}}]}]});
})

test("getProductsMarketingZonesProducts", () => {
    const params = idosell().getProductsMarketingZones.products([{"ident":{"type":"id","value":15},"sizes":[{"ident":{"type":"id","value":4}}]}]).getParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":15},"sizes":[{"ident":{"type":"id","value":4}}]}]});
})