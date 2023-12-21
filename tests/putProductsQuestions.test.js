import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putProductsQuestionsVisible", () => {
    const params = idosell().putProductsQuestions.id(7).visible("n").getParams();
    expect(params).toEqual({"questions":[{"id":7,"visible":"n"}]});
})