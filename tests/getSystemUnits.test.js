import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getSystemUnitsLanguagesIds", () => {
    const params = idosell().getSystemUnits.languagesIds(["pol"]).checkParams();
    expect(params).toEqual({"languagesIds":["pol"]});
})