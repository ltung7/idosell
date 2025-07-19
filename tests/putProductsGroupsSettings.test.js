import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsGroupsSettingsDisplayInPanel", () => {
    const params = idosell().putProductsGroupsSettings.productIdent({"productIdentType":"id","identValue":"33"}).displayInPanel("all").checkParams();
    expect(params).toEqual({"groups":[{"productIdent":{"productIdentType":"id","identValue":"33"},"displayInPanel":"all"}]});
})

test("putProductsGroupsSettingsProductId", () => {
    const params = idosell().putProductsGroupsSettings.productId(59).displayOnPage("all").displayInPanel("all").checkParams();
    expect(params).toEqual({"groups":[{"productIdent":{"productIdentType":"id","identValue":59},"displayOnPage":"all","displayInPanel":"all"}]});
})