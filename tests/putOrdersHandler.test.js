import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putOrdersHandlerOrderOperatorLogin", () => {
    const params = idosell().putOrdersHandler.orderSerialNumber(3).orderOperatorLogin("idosho503").checkParams();
    expect(params).toEqual({"orderSerialNumber":3,"orderOperatorLogin":"idosho503"});
})