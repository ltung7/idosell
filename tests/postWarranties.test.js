import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postWarrantiesPeriod", () => {
    const params = idosell().postWarranties.name("Warranty").type("seller").period(123).getParams();
    expect(params).toEqual({"warranties":[{"name":"Warranty","type":"seller","period":123}]});
})