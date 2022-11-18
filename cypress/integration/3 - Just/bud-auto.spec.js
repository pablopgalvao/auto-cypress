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

      it.only('Login e Age Gate', () => {
        cy.get('#onetrust-accept-btn-handler').click() // Aceitar Cokkies
        cy.get('#age-gate--yes').click()
        //cy.get('a[href*="/pt-br/user/sso/login"]').click()
        //cy.contains('a', ' Entrar ').click();
        cy.get('.coh-ce-cpt_header_hamburger_button_fwc-e6b7b2b3 > .login-header-link > .ssa-component > .coh-ce-cpt_button-a384e411 > .paragraph-container-horizontal-none > .coh-container > .coh-link')
        .click()


        //var login = document.querySelector("div.coh-container > .paragraph-button-align-right > .coh-ce-cpt_button-4a1d6b04")
        //cy.get('div.coh-container > paragraph-button-align-right > coh-ce-cpt_button-4a1d6b04 > a')
        //cy.get('*[class^="coh-ce-cpt_button-4a1d6b04"]')
        //.should('have.attr', 'href').and('include', 'contact')
     /*
        .then((login) => {
          cy.visit(login)
        })
     */   
        //var link = document.querySelector("div.coh-container > paragraph-button-align-right > coh-ce-cpt_button-4a1d6b04 > a").href;
        //cy.visit(link);
        //cy.ageGate()
        cy.get('#edit-email').type('diogohiller+nig14@gmail.com');
        cy.get('#edit-password').type('Abcd1234!');
        cy.contains('input', 'Entrar').click();
       // cy.contains('a', '/pt-br/fwc22/cupons').click();
    });
})