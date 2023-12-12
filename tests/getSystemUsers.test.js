import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getSystemUsersUserType", () => {
    const params = idosell().getSystemUsers.userType("all").getParams();
    expect(params).toEqual({"userType":"all"});
})