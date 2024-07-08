export const byId = (id, exactMatch = true) => {
    return exactMatch ? `[id="${id}"]` : `[id*="${id}"]`;
};

export const byDataTestId = (id, exactMatch = true) => {
    return exactMatch ? `[data-testid="${id}"]` : `[data-testid*="${id}"]`;
};

export const byClass = (tag, exactMatch = true) => {
    return exactMatch ? `[class="${tag}"]` : `[class*="${tag}"]`;
};

// Cypress Custom Commands
Cypress.Commands.add('getByID', (key, exactMatch) => {
    return cy.get(byId(key, exactMatch));
});

Cypress.Commands.add('getByDataTestId', (key, exactMatch) => {
    return cy.get(byDataTestId(key, exactMatch));
});

Cypress.Commands.add('getByCSS', (key) => {
    return cy.get(key);
});

Cypress.Commands.add('getByClass', (key, exactMatch) => {
    return cy.get(byClass(key, exactMatch));
});
