import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putProductsParametersNames", () => {
    const params = idosell().putProductsParameters.id(67).names([{"lang_id":"pol","value":"102cm"}]).getParams();
    expect(params).toEqual({"items":[{"id":67,"names":[{"lang_id":"pol","value":"102cm"}]}]});
})