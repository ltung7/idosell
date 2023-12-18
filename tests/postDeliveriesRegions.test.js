import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postDeliveriesRegionsParentRegionId", () => {
    const params = idosell().postDeliveriesRegions.postCodeFrom("00-000").postCodeTo("01-000").regionName("wwa1").shopId(1).parentRegionId(1).getParams();
    expect(params).toEqual({"postCodeFrom":"00-000","postCodeTo":"01-000","regionName":"wwa1","shopId":1,"parentRegionId":1});
})