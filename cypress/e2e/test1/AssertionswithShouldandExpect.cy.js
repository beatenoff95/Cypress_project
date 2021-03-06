/// <reference types="Cypress" />

it('SHOULD', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
    .type(100)
    .should('have.value', 100)
    .and('be.visible')

})
    it('Expect', ()=> {
        cy.visit('https://next.privat24.ua/mobile?lang=en')
        cy.get('[data-qa-node="amount"]')
        .type(100).then( input=> {
            expect(input).to.have.value(100)
        })
    })


    it('EXPECT', ()=> {
        cy.visit('https://next.privat24.ua/deposit/open?lang=en')
        cy.get('[data-qa-value="UAH"]')
           .should('be.checked')
        })


    it.only('Сhecking if it visible', ()=> {
    cy.visit('https://next.privat24.ua/deposit/open?lang=en')
        cy.contains('Мої депозити')
            .trigger('mouseover')
            .get('#archiveDeposits')
            .should('be.visible')
            })