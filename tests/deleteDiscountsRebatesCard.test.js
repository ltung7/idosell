import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteDiscountsRebatesCardCampaign_id", () => {
    const params = idosell().deleteDiscountsRebatesCard.campaign_id(207).getParams();
    expect(params).toEqual({"campaign_id":207});
})