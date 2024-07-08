const { ShopKeys } = require("../id");

class ShopPage {
    static buyProduct(fixture) {
        for (let index = 0; index < fixture.COUNT; index++) {
            cy.contains(fixture.ITEM).siblings('p').within(() => {
                cy.getByCSS(ShopKeys.BTN_BUY).click();
                cy.log(`Buy ${index + 1} ${fixture.ITEM}`);
            });
        }
    }
}

export default ShopPage;

