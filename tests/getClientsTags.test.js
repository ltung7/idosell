import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsTagsClientId", () => {
    const params = idosell().getClientsTags.clientId(3).checkParams();
    expect(params).toEqual({"clientId":3});
})