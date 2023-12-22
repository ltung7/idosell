import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteDiscountsRebatesCodeCampaign_id", () => {
    const params = idosell().deleteDiscountsRebatesCode.campaign_id(210).getParams();
    expect(params).toEqual({"campaign_id":210});
})