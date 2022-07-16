/// <types="Cypress"  />
describe('Login' , () =>{
      it('Sing in', () =>{
      cy.visit ("https://dev.sandmilk.com/")
      cy.contains ("Skip") .click({ multiple: true })
      .wait(7000)
      cy.get ('button[data-radium="true"]').find('div').eq(2) .click({force: true})
      cy.get ('label[for="terms"]') .click({force: true})
      cy.get ('label[for="policy"]') .click({force: true}) 
      cy.get ('[name="email"]')  .type ("beatenoff123321+88@gmail.com")
      cy.get ('[name="userName"]') . type ("Test4352")
      cy.get ('[name="password"]') . type ("Mortalkombat95")
      cy.get ('[name="confirmPassword"]') . type ("Mortalkombat95")
      cy.get ('button[data-radium="true"]').find('div').eq(2) .click({force: true})
      cy.contains ('Continue').find('div').eq(1) .click({force: true})

      .wait(10000)
  

   

      })
    })