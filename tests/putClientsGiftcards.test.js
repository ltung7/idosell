import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putClientsGiftcardsName", () => {
    const params = idosell().putClientsGiftcards.id(23).name("My Card").getParams();
    expect(params).toEqual({"giftCards":[{"id":23,"name":"My Card"}]});
})

test("putClientsGiftcardsAdd", () => {
    const params = idosell().putClientsGiftcards.id(23).add(10, "PLN").getParams();
    expect(params).toEqual({"giftCards":[{"id":23,"balance":{"amount":10,"currency":"PLN"},"balanceOperationType":"add"}]});
})

test("putClientsGiftcardsMultiple", () => {
    const params = idosell().putClientsGiftcards.id(23).set(100, "PLN").append().id(24).subtract(20).getParams();
    expect(params).toEqual({"giftCards":[{"id":23,"balance":{"amount":100,"currency":"PLN"},"balanceOperationType":"set"},{"id":24,"balance":{"amount":20,"currency":"PLN"},"balanceOperationType":"subtract"}]});
})
