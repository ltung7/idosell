import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putWarrantiesLanguageDataLang", () => {
    const params = idosell().putWarrantiesLanguageData.warranty_id(6).lang([{"lang_id":"pol","name":"GrawancjaPL","description":"GrawancjaPL"}]).getParams();
    expect(params).toEqual({"lang_data":[{"warranty_id":6,"lang":[{"lang_id":"pol","name":"GrawancjaPL","description":"GrawancjaPL"}]}]});
})