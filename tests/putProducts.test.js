import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsCountryOfOrigin", () => {
    const params = idosell().putProducts.productId(33).countryOfOrigin("PL").getParams();
    expect(params).toEqual({"products":[{"productId":33,"countryOfOrigin":"PL"}]});
})

test("putProductsSetText", () => {
    const params = idosell().putProducts.productId(33).setText("Krzesło Pavon", "name").getParams();
    expect(params).toEqual({"products":[{"productId":33,"productNames":{"productNamesLangData":[{"langId":"pol","productName":"Krzesło Pavon"}]}}]});
})

test("putProductsEditMode", () => {
    const params = idosell().putProducts.editMode().productId(33).productDisplayedCode("PD01").getParams();
    expect(params).toEqual({"settings":{"settingModificationType":"edit"},"products":[{"productId":33,"productDisplayedCode":"PD01"}]});
})

test("putProductsSetRetailPrice", () => {
    const params = idosell().putProducts.productId(33).setPrice(219).getParams();
    expect(params).toEqual({"products":[{"productId":33,"priceChangeMode":"amount_set","productRetailPrice":219}]});
})

test("putProductsSetWholesaleNetPrice", () => {
    const params = idosell().putProducts.productId(33).setPrice(169, "wholesale", true).getParams();
    expect(params).toEqual({"products":[{"productId":33,"priceChangeMode":"amount_set","productWholesalePriceNet":169}]});
})

test("putProductsSetMenu", () => {
    const params = idosell().putProducts.productId(33).setMenu(1,252).getParams();
    expect(params).toEqual({"products":[{"productId":33,"productMenuItems":[{"productMenuOperation":"add_product","shopId":1,"menuItemId":252}]}]});
})

test("putProductsPictures", () => {
    const params = idosell().putProducts.productId(77).pictures(["https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"]).getParams();
    expect(params).toEqual({"products":[{"productId":77,"productPictures":[{"productPictureSource":"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"}]}],"picturesSettings":{"picturesSettingInputType":"url"}});
})