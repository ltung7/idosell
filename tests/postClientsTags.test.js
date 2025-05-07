import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postClientsTagsTagValue", () => {
    const params = idosell().postClientsTags.clientId(3).tagName("tag1").tagValue(2).getParams();
    expect(params).toEqual({"params":[{"clientId":3,"tagName":"tag1","tagValue":2}]});
})