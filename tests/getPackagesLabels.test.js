import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getPackagesLabels", () => {
    const params = idosell().getPackagesLabels.order(21).checkParams();
    expect(params).toEqual({"eventType":"order","eventId":21});
})