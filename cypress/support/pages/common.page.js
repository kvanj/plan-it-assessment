const { CommonKeys, Routes } = require("../id");

class CommonPage {
	static async navigateToContact() {
		await cy.getByID(CommonKeys.NAV_CONTACT).should('be.exist').click();
		await cy.url().should('include', Routes.CONTACT);
	}

	static async navigateToShop() {
		await cy.getByID(CommonKeys.NAV_SHOP).should('be.exist').click();
		await cy.url().should('include', Routes.SHOP);
	}

	static async navigateToCart() {
		await cy.getByID(CommonKeys.NAV_CART).should('be.exist').click();
		await cy.url().should('include', Routes.CART);
	}
}

export default CommonPage;

