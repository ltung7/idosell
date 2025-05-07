import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postClientsGiftcardsBalance", () => {
    const params = idosell().postClientsGiftcards.typeId(10).number("A123456789").pin("1234").name("Test card").expirationDate("2030-12-31").shops([1,2]).balance({"amount":100,"currency":"PLN"}).getParams();
    expect(params).toEqual({"giftCards":[{"typeId":10,"number":"A123456789","pin":"1234","name":"Test card","expirationDate":"2030-12-31","shops":[1,2],"balance":{"amount":100,"currency":"PLN"}}]});
})