import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postWarrantiesPeriod", () => {
    const params = idosell().postWarranties.name("Warranty").type("seller").period(123).checkParams();
    expect(params).toEqual({"warranties":[{"name":"Warranty","type":"seller","period":123}]});
})