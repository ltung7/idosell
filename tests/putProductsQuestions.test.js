import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsQuestionsVisible", () => {
    const params = idosell().putProductsQuestions.id(7).visible("n").checkParams();
    expect(params).toEqual({"questions":[{"id":7,"visible":"n"}]});
})