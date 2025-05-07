import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putSystemUnitsNameInPanel", () => {
    const params = idosell().putSystemUnits.id(3).nameInPanel("paczki").getParams();
    expect(params).toEqual({"units":[{"id":3,"nameInPanel":"paczki"}]});
})