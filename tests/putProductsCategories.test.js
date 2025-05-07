import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsCategoriesOperation", () => {
    const params = idosell().putProductsCategories.id(1157971976).lang_data([{"lang_id":"pol","singular_name":"Kategoria","plural_name":"Kategorie"}]).operation("edit").getParams();
    expect(params).toEqual({"categories":[{"id":1157971976,"lang_data":[{"lang_id":"pol","singular_name":"Kategoria","plural_name":"Kategorie"}],"operation":"edit"}]});
})