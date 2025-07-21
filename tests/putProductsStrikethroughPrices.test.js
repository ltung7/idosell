import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsStrikethroughPricesRetail", () => {
    const params = idosell().putProductsStrikethroughPrices.ident({"type":"id","value":"33"}).stp_settings({"price_change_mode":"amount_set","price_change_basevalue":"price","retail_price_change_value":199}).checkParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":"33"},"stp_settings":{"price_change_mode":"amount_set","price_change_basevalue":"price","retail_price_change_value":199}}]});
})

test("putProductsStrikethroughPricesProductId", () => {
    const params = idosell().putProductsStrikethroughPrices.stp_settings({"price_change_mode":"amount_set","retail_price_change_value":249}).productId(33).checkParams();
    expect(params).toEqual({"products":[{"stp_settings":{"price_change_mode":"amount_set","retail_price_change_value":249},"ident":{"type":"id","value":33}}]});
})

test("putProductsStrikethroughPricesSetPrice", () => {
    const params = idosell().putProductsStrikethroughPrices.productId(33).setPrice(349).checkParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":33},"stp_settings":{"price_change_mode":"amount_set","price_change_basevalue":"price","retail_price_change_value":349}}]});
})

test("putProductsStrikethroughPricesAddPricePercent", () => {
    const params = idosell().putProductsStrikethroughPrices.productId(33).addPricePercent(20).addPricePercent(5, true).checkParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":33},"stp_settings":{"price_change_mode":"percent_diff","price_change_basevalue":"price","retail_price_change_value":20,"wholesale_price_change_value":5}}]});
})