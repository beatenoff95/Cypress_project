/// <reference types="Cypress"  />

it('Replanishment of Ukraine mobile phone number',  ()=> {
cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="phone-number"]')
    .type('686979712')
    .get('[data-qa-node="amount"]')
    .type('1')
    .get('[data-qa-node="numberdebitSource"]')
    .type('4552331448138217')
    .get('[data-qa-node="expiredebitSource"]')
    .type('0524')
    .get('[data-qa-node="cvvdebitSource"]')
    .type('111')
    .get('[data-qa-node="submit"]') 
    .click()
    .get('[data-qa-node="card"]')
    .should('have.text', "4552 **** **** 8217")
    .get('[data-qa-node="amount"]')
    .contains('1')
    .get('[data-qa-node="commission-currency"]')
    .should('have.text',' UAH') 
    .get('[data-qa-node="commission"]')
    .eq(1)
    .should('have.text',"2")
    .get('[data-qa-node="comission-currency"]')
    .should('contain.text', 'UAH')
    
    


    





})