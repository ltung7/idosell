import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsOmnibusPricesOmnibusPrices", () => {
    const params = idosell().putProductsOmnibusPrices.ident({"type":"id","value":"33"}).omnibusPrices({"omnibusPriceRetail":299}).checkParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":"33"},"omnibusPrices":{"omnibusPriceRetail":299}}]});
})

test("putProductsOmnibusPricesProductId", () => {
    const params = idosell().putProductsOmnibusPrices.productId(33).checkParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":33}}]});
})

test("putProductsOmnibusPricesSetPrice", () => {
    const params = idosell().putProductsOmnibusPrices.productId(33).setPrice(299).setPrice(259, true).checkParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":33},"omnibusPrices":{"omnibusPriceRetail":299,"omnibusPriceWholesale":259}}]});
})

test("putProductsOmnibusPricesMode", () => {
    const params = idosell().putProductsOmnibusPrices.productId(33).mode(true).checkParams();
    expect(params).toEqual({"products":[{"ident":{"type":"id","value":33},"omnibusPrices":{"omnibusPriceManagement":"manual"}}]});
})