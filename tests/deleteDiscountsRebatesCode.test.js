import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteDiscountsRebatesCodeCampaign_id", () => {
    const params = idosell().deleteDiscountsRebatesCode.campaign_id(210).checkParams();
    expect(params).toEqual({"campaign_id":210});
})