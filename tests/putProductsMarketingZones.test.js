import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsMarketingZonesAssignment_mode", () => {
    const params = idosell().putProductsMarketingZones.ident({"type":"id","value":"33"}).marketing_zones({"promotion":"yes","discount":"yes","distinguished":"yes","special":"yes"}).assignment_mode("manual").checkParams();
    expect(params).toEqual({"shops":[{"ident":{"type":"id","value":"33"}}],"marketing_zones":{"promotion":"yes","discount":"yes","distinguished":"yes","special":"yes"},"assignment_mode":"manual"});
})