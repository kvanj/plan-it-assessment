import CommonPage from "../support/pages/common.page";
import ContactPage from "../support/pages/contact.page";

before(() => {
    cy.getDataFixture();
});

describe('Test Case 1 - Assessment', function () {
    before('Open Base URL', function () {
        cy.visit('/');
    });

    it('Navigate to Contact Page', function () {
        CommonPage.navigateToContact();
    });

    it('Click Submit Button', function () {
        ContactPage.clickSubmit();
    });

    it('Verify Error Message If Exist', function () {
        ContactPage.verifyMandatoryErrorMessages(this.data.MANDATORY_ERROR_MESSAGES);
    });

    it('Fill Mandatory Fields', function () {
        ContactPage.fillMandatoryFields(this.data.CONTACT_INFORMATION);
    });

    it('Verify Error Message If Not Exist', function () {
        ContactPage.verifyMandatoryErrorMessages(this.data.MANDATORY_ERROR_MESSAGES, false);
    });
});