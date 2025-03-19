import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putResponsibilityEntities", () => {
    const params = idosell().putResponsibilityEntities.type('person').code('TEST').name('MultiTest sp. z o. o.')
    expect(params).toEqual({"type":"person","entities":[{"code":"TEST","name":"MultiTest sp. z o. o."}]});
})

