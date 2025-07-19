import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteProductsOpinionsId", () => {
    const params = idosell().deleteProductsOpinions.id(13).checkParams();
    expect(params).toEqual({"id":13});
})