//const { get } = require("lodash");

describe('Pegar Tabela HTML e Gerar Arquivo', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://budweiser.com/pt-br/fwc22')
        cy.wait(500)
        //cy.once('uncaught:exception', () => false);
        cy.get('#onetrust-accept-btn-handler')
    })    

    Cypress.on('uncaught:exception', (err, runnable) => {
        // we expect a 3rd party library error with message 'list not defined'
        // and don't want to fail the test so we return false
        if (err.message.includes('li')) {
          return false
        }
        // we still want to ensure there are no other unexpected
        // errors, so we let them fail the test
      })
/*
      it.only('Login e Age Gate', () => {
        //cy.get('#onetrust-accept-btn-handler').click() // Aceitar Cokkies
        cy.login('pablo.galvao@justdigital.com.br', 'Just123#')
        cy.ageGate()
    });

    it('Criando o JSON', () => {
        cy.getTable()
        cy.get('.toolbar-icon-system-admin-content').click();
        //cy.get('.pager__item--next > .pager__link').click()
    });
*/


})