const { get } = require("lodash");

describe('Pegar Tabela HTML e Gerar Arquivo', () => {
    before(() => {
        cy.viewport(1920, 1080)
        cy.wait(500) // Temmpo de espera para acesssar o age gate 
        cy.visit('http://budweiser.com/pt-br/fwc22')
        
        //cy.once('uncaught:exception', () => false);
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
*/
    it('Pasasndo do Age Gate', () => {
        cy.get('#onetrust-accept-btn-handler').click() // Passar dos Cokkies
        cy.get('#age-gate--yes').click()
        cy.get('.coh-col-xs-3 > .coh-container')
        cy.get('.coh-button > menu-hamburger-desktop-button-open > coh-interaction').click()
        //cy.get('[id^=coh-button menu-hamburger-desktop-button-open-]')
    });
        
})