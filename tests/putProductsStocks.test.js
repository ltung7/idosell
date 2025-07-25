import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsStocksSizes", () => {
    const params = idosell().putProductsStocks.ident({"identType":"id","identValue":"13"}).sizes([{"ident":{"identType":"id","identValue":"1"},"quantity":{"stocks":[{"quantity_operation":{"operation":"set","quantity":20},"stock_id":1}]}}]).checkParams();
    expect(params).toEqual({"products":[{"ident":{"identType":"id","identValue":"13"},"sizes":[{"ident":{"identType":"id","identValue":"1"},"quantity":{"stocks":[{"quantity_operation":{"operation":"set","quantity":20},"stock_id":1}]}}]}]});
})