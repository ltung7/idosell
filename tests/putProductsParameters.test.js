import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsParametersNames", () => {
    const params = idosell().putProductsParameters.id(67).names([{"lang_id":"pol","value":"102cm"}]).checkParams();
    expect(params).toEqual({"items":[{"id":67,"names":[{"lang_id":"pol","value":"102cm"}]}]});
})