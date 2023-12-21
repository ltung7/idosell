import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putOrdersHandlerOrderOperatorLogin", () => {
    const params = idosell().putOrdersHandler.orderSerialNumber(3).orderOperatorLogin("idosho503").getParams();
    expect(params).toEqual({"orderSerialNumber":3,"orderOperatorLogin":"idosho503"});
})