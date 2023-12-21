import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putProductsImagesProductImages", () => {
    const params = idosell().putProductsImages.productsImagesSettings({"productsImagesSourceType":"url","productsImagesApplyMacro":true}).productIdent({"identValue":"33","productIdentType":"id"}).productImages([{"productImageSource":"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png","productImageNumber":7}]).getParams();
    expect(params).toEqual({"productsImagesSettings":{"productsImagesSourceType":"url","productsImagesApplyMacro":true},"productsImages":[{"productIdent":{"identValue":"33","productIdentType":"id"},"productImages":[{"productImageSource":"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png","productImageNumber":7}]}]});
})