import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postPackagesLabelsEventType", () => {
    const params = idosell().postPackagesLabels.eventId(15).eventType("order").checkParams();
    expect(params).toEqual({"eventId":15,"eventType":"order"});
})