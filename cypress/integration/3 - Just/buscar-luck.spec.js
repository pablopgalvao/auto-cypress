const { get } = require("lodash");

describe('Pegar Tabela HTML e Gerar Arquivo', () => {
    beforeEach(() => {
        cy.visit('https://local.budweisercom.com/user')
        cy.once('uncaught:exception', () => false);
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

    it('Digitar Login e Senha', () => {
        //cy-get('input[#edit-name]').type('admin')
        cy.get('#edit-name').type('admin2');
        cy.get('#edit-pass').type('#Telem@tica1017');
        cy.contains('input', 'Log in').click();
        cy.contains('a', 'Confirm').click();
        cy.contains('Sim').click(({ force: true }))
        //.click({ force: true })
        //cy.get('#footer .next').click(341, 120, { force: true })
        //cy.get('a', '#age-gate--yes').click();
        //cy.wait(2000)
        //cy.on('uncaught:exception', () => false);
        //cy.get('#age-gate--confirm')
        //cy.get('#age-gate--yes')
        cy.get('.toolbar-icon-system-admin-content').click();
        cy.get('tbody tr');
        //cy.writeFile('path/to/tabela.txt', 'tbody tr')
        

        
    })
        
})