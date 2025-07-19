import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putDeliveriesDefaultProfilesRetailProfileId", () => {
    const params = idosell().putDeliveriesDefaultProfiles.shopId(1).regionId(1143020169).retailProfileId(1118398155).checkParams();
    expect(params).toEqual({"shopId":1,"regionId":1143020169,"retailProfileId":1118398155});
})