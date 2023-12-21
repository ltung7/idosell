import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putDeliveriesDefaultProfilesRetailProfileId", () => {
    const params = idosell().putDeliveriesDefaultProfiles.shopId(1).regionId(1143020169).retailProfileId(1118398155).getParams();
    expect(params).toEqual({"shopId":1,"regionId":1143020169,"retailProfileId":1118398155});
})