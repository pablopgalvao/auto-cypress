// Realizar Login na Página COPA
Cypress.Commands.add('login', (login, password) => {
    cy.get('#edit-name').type(login);
    cy.get('#edit-pass').type(password);
    cy.contains('input', 'Log in').click();
})
// Passar sobre o Age Gate na Página da COPA
Cypress.Commands.add('ageGate', () => {
    cy.contains('a', 'Confirm').click();
    //cy.get('#age-gate--yes').click(({ force: true }))
    cy.contains('Sim').click(({ force: true }))
})
// Extrair linhas e tabelas e criar arquivo (GERAL)
Cypress.Commands.add('getTable', () => {
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
    });
})