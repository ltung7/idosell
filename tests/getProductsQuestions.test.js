import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsQuestionsProductId", () => {
    const params = idosell().getProductsQuestions.productId(33).checkParams();
    expect(params).toEqual({"productId":33});
})

test("getProductsQuestionsId", () => {
    const params = idosell().getProductsQuestions.id(7).checkParams();
    expect(params).toEqual({"id":7});
})