import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postProductsOpinionsProducts", () => {
    const params = idosell().postProductsOpinions.shopId(1).rating("5").products({"type": "id","value": "9"}).getParams();
    expect(params).toEqual({"opinions":[{"shopId":1,"rating":"5","products":{"type":"id","value":"9"}}]});
})