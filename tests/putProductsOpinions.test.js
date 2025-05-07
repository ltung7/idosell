import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsOpinionsConfirmed", () => {
    const params = idosell().putProductsOpinions.id(1).confirmed("y").getParams();
    expect(params).toEqual({"id":1,"confirmed":"y"});
})