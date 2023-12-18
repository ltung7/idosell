import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postClientsTagsTagValue", () => {
    const params = idosell().postClientsTags.clientId(3).tagName("tagme").tagValue(2).getParams();
    expect(params).toEqual({"params":[{"clientId":3,"tagName":"tagme","tagValue":2}]});
})