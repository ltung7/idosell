import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postPackagesLabelsEventType", () => {
    const params = idosell().postPackagesLabels.eventId(15).eventType("order").checkParams();
    expect(params).toEqual({"eventId":15,"eventType":"order"});
})

test("postPackagesLabelsOrderSn", () => {
    const params = idosell().postPackagesLabels.orderSn(39).checkParams();
    expect(params).toEqual({"eventId":39,"eventType":"order"});
})

test("postPackagesLabelsSize", () => {
    const params = idosell().postPackagesLabels.orderSn(39).size("small").checkParams();
    expect(params).toEqual({"eventId":39,"eventType":"order","parcelParameters":[{"id":"defaultParcelGauge","value":"small"}]});
})