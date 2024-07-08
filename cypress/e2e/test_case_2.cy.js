import { Routes } from "../support/id";
import CommonPage from "../support/pages/common.page";
import ContactPage from "../support/pages/contact.page";

before(() => {
    cy.getDataFixture();
});

describe('Test Case 2 - Assessment', function () {
    before('Open Base URL', function () {
        cy.visit('/');
    });

    it('Navigate to Contact Page', function () {
        CommonPage.navigateToContact();
    });

    it('Fill Mandatory Fields', function () {
        ContactPage.fillMandatoryFields(this.data.CONTACT_INFORMATION);
    });

    it('Click Submit Button', function () {
        ContactPage.clickSubmit();
    });

    it('Verify Successful Message', function () {
        ContactPage.verifySuccessfulMessage(this.data);
    });
});

// Execute 5 Times
// Cypress._.times(5, (index) => {
//     describe(`Test Case 2 - Assessment (${index + 1} Run)`, function () {
//         before('Open Base URL', function () {
//             cy.visit('/');
//             cy.url().should('not.include', Routes.CONTACT);
//         });

//         it('Navigate to Contact Page', function () {
//             CommonPage.navigateToContact();
//         });

//         it('Fill Mandatory Fields', function () {
//             ContactPage.fillMandatoryFields(this.data.CONTACT_INFORMATION);
//         });

//         it('Click Submit Button', function () {
//             ContactPage.clickSubmit();
//         });

//         it('Verify Successful Message', function () {
//             ContactPage.verifySuccessfulMessage(this.data);
//         });
//     });
// });