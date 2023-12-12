import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsQuestionsProductId", () => {
    const params = idosell().getProductsQuestions.productId(17).getParams();
    expect(params).toEqual({"productId":17});
})