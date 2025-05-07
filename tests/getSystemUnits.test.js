import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getSystemUnitsLanguagesIds", () => {
    const params = idosell().getSystemUnits.languagesIds(["pol"]).getParams();
    expect(params).toEqual({"languagesIds":["pol"]});
})