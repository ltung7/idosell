import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postOrdersImagesSettings", () => {
    const params = idosell().postOrdersImages.order({"orderSerialNumber": 9}).userName("me").type("product").source("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png").name("logo").settings({"sourceType":"url"}).getParams();
    expect(params).toEqual({"order":{"orderSerialNumber":9},"userName":"me","images":[{"type":"product","source":"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png","name":"logo"}],"settings":{"sourceType":"url"}});
})