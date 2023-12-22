import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteProductsOpinionsId", () => {
    const params = idosell().deleteProductsOpinions.id(13).getParams();
    expect(params).toEqual({"id":13});
})