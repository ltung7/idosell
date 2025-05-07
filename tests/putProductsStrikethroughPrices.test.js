import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsStrikethroughPricesStp_settings", () => {
    const params = idosell().putProductsStrikethroughPrices.ident({"type":"id","value":"33"}).stp_settings({"price_change_mode":"amount_set","price_change_basevalue":"price","retail_price_change_value":199}).getParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":"33"},"stp_settings":{"price_change_mode":"amount_set","price_change_basevalue":"price","retail_price_change_value":199}}]});
})