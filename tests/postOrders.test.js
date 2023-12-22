import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postOrdersExistingClient", () => {
    const params = idosell().postOrders.shopId(1).stockId(1).orderPaymentType("cash_on_delivery").currencyId("PLN").courierId(10).orderType("retail").clientLogin("iai_demo").clientWithoutAccount("n").products([{"productId":13,"sizeId":"1","productQuantity":1,"productRetailPrice":10}]).getParams();
    expect(params).toEqual({"orders":[{"shopId":1,"stockId":1,"orderPaymentType":"cash_on_delivery","currencyId":"PLN","courierId":10,"orderType":"retail","clientLogin":"iai_demo","clientWithoutAccount":"n","products":[{"productId":13,"sizeId":"1","productQuantity":1,"productRetailPrice":10}]}]});
})

test("postOrdersClientWithoutAccountData", () => {
    const params = idosell().postOrders.shopId(1).stockId(1).orderPaymentType("cash_on_delivery").currencyId("PLN").courierId(10).orderType("retail").clientWithoutAccount("y").products([{"productId":13,"sizeId":"1","productQuantity":1,"productRetailPrice":10}]).clientWithoutAccountData({"clientFirstName":"TEST","clientLastName":"Client","clientCity":"Warsaw","clientCountry":"Polska"}).clientDeliveryAddress({"clientDeliveryAddressFirstName":"Test","clientDeliveryAddressLastName":"Person","clientDeliveryAddressCountry":"Polska","clientDeliveryAddressCity":"Warsaw","clientDeliveryAddressStreet":"Grzybowska","clientDeliveryAddressZipCode":"00-844"}).getParams();
    expect(params).toEqual({"orders":[{"shopId":1,"stockId":1,"orderPaymentType":"cash_on_delivery","currencyId":"PLN","courierId":10,"orderType":"retail","clientWithoutAccount":"y","products":[{"productId":13,"sizeId":"1","productQuantity":1,"productRetailPrice":10}],"clientWithoutAccountData":{"clientFirstName":"TEST","clientLastName":"Client","clientCity":"Warsaw","clientCountry":"Polska"},"clientDeliveryAddress":{"clientDeliveryAddressFirstName":"Test","clientDeliveryAddressLastName":"Person","clientDeliveryAddressCountry":"Polska","clientDeliveryAddressCity":"Warsaw","clientDeliveryAddressStreet":"Grzybowska","clientDeliveryAddressZipCode":"00-844"}}]});
})