

it('Add/Remove elements', ()=> {
    
cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
.get('[onclick="addElement()"]') .click()
.get('[class="added-manually"]') .should('be.visible')
  .and('contains.text', 'Delete' )
  .and('not.be.disabled')
  .and('be.enabled')
  .wait(2000)
  .click()
})
