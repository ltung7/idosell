import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsGroupsSettingsDisplayInPanel", () => {
    const params = idosell().putProductsGroupsSettings.productIdent({"productIdentType":"id","identValue":"33"}).displayInPanel("all").getParams();
    expect(params).toEqual({"groups":[{"productIdent":{"productIdentType":"id","identValue":"33"},"displayInPanel":"all"}]});
})

test("putProductsGroupsSettingsProductId", () => {
    const params = idosell().putProductsGroupsSettings.productId(59).displayOnPage("all").displayInPanel("all").getParams();
    expect(params).toEqual({"groups":[{"productIdent":{"productIdentType":"id","identValue":59},"displayOnPage":"all","displayInPanel":"all"}]});
})