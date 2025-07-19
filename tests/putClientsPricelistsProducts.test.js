import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putClientsPricelistsProductsProducts", () => {
    const params = idosell().putClientsPricelistsProducts.priceListId(200).products({"productId": 9,"price": 10,"currencyId": "PLN"}).checkParams();
    expect(params).toEqual({"priceListId":200,"products":[{"productId":9,"price":10,"currencyId":"PLN"}]});
})