const { CartKeys } = require("../id");

class CartPage {
    static verifyPriceAndSubtotal(fixture) {
        cy.contains('td', fixture.ITEM).then(async (elem) => {
            cy.wrap(elem).next().contains(fixture.PRICE);
            cy.wrap(elem).nextUntil(CartKeys.INPUT_QUANTITY).next().contains(fixture.SUBTOTAL)
        })
    }

    static verifyTotalAmount(fixture) {
        const total = fixture.STUFFED_FROG.SUBTOTAL + fixture.FLUFFY_BUNNY.SUBTOTAL + fixture.VALENTINE_BEAR.SUBTOTAL;
        cy.getByCSS(CartKeys.TOTAL).contains(`Total: ${total}`);
    }
}

export default CartPage;

