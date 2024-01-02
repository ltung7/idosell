import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postOrdersOrder", () => {
    const params = idosell().postOrdersImages.order({"orderSerialNumber": 9}).userName("me").type("product").source("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png").name("logo").settings({"sourceType":"url"}).getParams();
    expect(params).toEqual({"order":{"orderSerialNumber":9},"userName":"me","images":[{"type":"product","source":"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png","name":"logo"}],"settings":{"sourceType":"url"}});
})

test("postOrdersImagesOrderSerialNumber", () => {
    const params = idosell().postOrdersImages.type("package").source("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png").name("package").orderSerialNumber(17).getParams();
    expect(params).toEqual({"userName":"api","images":[{"type":"package","source":"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png","name":"package"}],"settings":{"sourceType":"url"},"order":{"orderSerialNumber":17}});
})