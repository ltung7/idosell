import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getSystemUsersUserType", () => {
    const params = idosell().getSystemUsers.userType("all").getParams();
    expect(params).toEqual({"userType":"all"});
})