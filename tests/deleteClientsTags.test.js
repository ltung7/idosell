import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteClientsTagsTagId", () => {
    const params = idosell().deleteClientsTags.clientId(3).tagId(2).getParams();
    expect(params).toEqual({"params":[{"clientId":3,"tagId":2}]});
})