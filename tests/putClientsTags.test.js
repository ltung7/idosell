import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putClientsTagsTagValue", () => {
    const params = idosell().putClientsTags.clientId(3).tagId(1).operation("set").tagValue(123).getParams();
    expect(params).toEqual({"clientId":3,"clientTags":[{"tagId":1,"operation":"set","tagValue":123}]});
})