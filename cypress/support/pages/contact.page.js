const { ContactKeys } = require("../id");

class ContactPage {
    static fillMandatoryFields(fixture) {
        this.fillForename(fixture);
        this.fillEmail(fixture);
        this.fillMessage(fixture);
    }

    static clickSubmit() {
         cy.getByCSS(ContactKeys.BTN_SUBMIT).click();
    }

    static  verifyMandatoryErrorMessages(fixture, ifExist = true) {
        if (ifExist) {
             cy.getByCSS(ContactKeys.ERROR_ALERT).should('exist').contains(fixture.ERROR_ALERT);
             cy.getByID(ContactKeys.ERROR_FORENAME).should('exist').contains(fixture.ERROR_FORENAME);
             cy.getByID(ContactKeys.ERROR_EMAIL).should('exist').contains(fixture.ERROR_EMAIL);
             cy.getByID(ContactKeys.ERROR_MESSAGE).should('exist').contains(fixture.ERROR_MESSAGE);
        } else {
             cy.getByCSS(ContactKeys.ERROR_ALERT).should('not.exist');
             cy.getByID(ContactKeys.ERROR_FORENAME).should('not.exist');
             cy.getByID(ContactKeys.ERROR_EMAIL).should('not.exist');
             cy.getByID(ContactKeys.ERROR_MESSAGE).should('not.exist');
        }
    }

    static fillForename(fixture) {
        cy.getByID(ContactKeys.INPUT_FORENAME).type(fixture.INPUT_FORENAME);
    }

    static fillSurname(fixture) {
        cy.getByID(ContactKeys.INPUT_SURNAME).type(fixture.INPUT_SURNAME);
    }

    static fillEmail(fixture) {
        cy.getByID(ContactKeys.INPUT_EMAIL).type(fixture.INPUT_EMAIL);
    }

    static fillTel(fixture) {
        cy.getByID(ContactKeys.INPUT_TEL).type(fixture.INPUT_TEL);
    }

    static fillMessage(fixture) {
        cy.getByID(ContactKeys.TEXTAREA_MESSAGE).type(fixture.TEXTAREA_MESSAGE);
    }

    static async verifySuccessfulMessage(fixture) {
        await cy.getByCSS(ContactKeys.ALERT_SUCCESS).should('exist').contains(fixture.ALERT_SUCCESS);
    }
}

export default ContactPage;

