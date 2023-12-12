import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getClientsProvinceListCountry_code", () => {
    const params = idosell().getClientsProvinceList.country_code("UA").getParams();
    expect(params).toEqual({"country_code":"UA"});
})