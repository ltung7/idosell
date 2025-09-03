import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsMarketingZones", () => {
    const params = idosell().putProductsMarketingZones.ident({"type":"id","value":"33"}).marketing_zones({"promotion":"yes","discount":"yes","distinguished":"yes","special":"yes"}).assignment_mode("manual").checkParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":"33"}}],"marketing_zones":{"promotion":"yes","discount":"yes","distinguished":"yes","special":"yes"},"assignment_mode":"manual"});
})