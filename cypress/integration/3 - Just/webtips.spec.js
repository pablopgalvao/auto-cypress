import { generate } from "rxjs";

describe('Collecting Data', () => {
    before(() => {
        cy.visit('https://local.budweisercom.com/user');
        cy.once('uncaught:exception', () => false);
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        // we expect a 3rd party library error with message 'list not defined'
        // and don't want to fail the test so we return false
        if (err.message.includes('li')) {
          return false
        }
        // we still want to ensure there are no other unexpected
        // errors, so we let them fail the test
      })

    it('Login e Age Gate', () => {
        cy.login('admin2', '#Telem@tica1017')
        cy.ageGate()
    });

    it('Criando o JSON', () => {
        cy.getTable()
        //cy.get('.pager__item--next > .pager__link').click()
    });



    //clickVisibleButton = () => {
        /*
    it('Paginação', () => {
        cy.get( '.pager__item--next > .pager__link' ).then( $mainContainer => {
            const isVisible = $mainContainer.find( '.pager__item--next > .pager__link' ).is( ':visible' );
            if ( isVisible ) {

                it('Criando o JSON', () => {
                    const results = [];
            
                    cy.get('table tr').each(($tr, index) => {
                        if (index !== 0) {
                            const rowElement = $tr.get(0);
                            const cells = rowElement.cells;
            
                            results.push({
                                Title: cells[1].innerText,
                                'Content Type': cells[2].innerText,
                                Author: cells[3].innerText,
                                Status: cells[4].innerText,
                                Updated: cells[5].innerText,
                                'Translation language': cells[6].innerText,
                            });
                        }
                    }).then(() => {
                        console.log(results);
                        cy.writeFile('tabelas/tabela.txt', results);
                        cy.get( '.pager__item--next > .pager__link' ).click();
                        this.clickVisibleButton();
                    });
                    //cy.get('.pager__item--next > .pager__link').click()
                });


                
            }
        } ); 
    }) */

});
