import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsProvinceListCountry_code", () => {
    const params = idosell().getClientsProvinceList.country_code("UA").checkParams();
    expect(params).toEqual({"country_code":"UA"});
})