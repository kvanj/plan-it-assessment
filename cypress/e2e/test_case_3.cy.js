import CartPage from "../support/pages/cart.page";
import CommonPage from "../support/pages/common.page";
import ShopPage from "../support/pages/shop.page";

before(() => {
    cy.getDataFixture();
});

describe('Test Case 3 - Assessment', function () {
    before('Open Base URL', function () {
        cy.visit('/');
    });

    it('Navigate to Shop Page', function () {
        CommonPage.navigateToShop();
    });

    it('Select Product & Hit Buy', function () {
        ShopPage.buyProduct(this.data.PRODUCTS.STUFFED_FROG);
        ShopPage.buyProduct(this.data.PRODUCTS.FLUFFY_BUNNY);
        ShopPage.buyProduct(this.data.PRODUCTS.VALENTINE_BEAR);
    });

    it('Navigate to Cart Page', function () {
        CommonPage.navigateToCart();
    });

    it('Verify Cart Price, Subtotal', function () {
        CartPage.verifyPriceAndSubtotal(this.data.PRODUCTS.STUFFED_FROG);
        CartPage.verifyPriceAndSubtotal(this.data.PRODUCTS.FLUFFY_BUNNY);
        CartPage.verifyPriceAndSubtotal(this.data.PRODUCTS.VALENTINE_BEAR);
    });

    it('Verify Cart Total Amount', function () {
        CartPage.verifyTotalAmount(this.data.PRODUCTS);
    });
});