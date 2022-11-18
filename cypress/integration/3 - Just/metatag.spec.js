const { get } = require("lodash");

describe('Pegar Titles e Meta tags das Páginas', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://budweiser.com/pt-br/fwc22')
        //cy.wait("xhr41")
        //cy.once('uncaught:exception', () => false);
    })    
/*
    Cypress.on('uncaught:exception', (err, runnable) => {
        // we expect a 3rd party library error with message 'list not defined'
        // and don't want to fail the test so we return false
        if (err.message.includes('li')) {
          return false
        }
        // we still want to ensure there are no other unexpected
        // errors, so we let them fail the test
      })
*/
    it.only('Login e Age Gate', () => {
        cy.get('#onetrust-accept-btn-handler').click() // Aceitar Cokkies
        cy.ageGate()
    });
/*
    it('Criando o JSON', () => {
        cy.getTable()
        cy.get('.toolbar-icon-system-admin-content').click();
        //cy.get('.pager__item--next > .pager__link').click()
    });
*/      
})