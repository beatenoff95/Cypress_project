
it('Hover On Elements', ()=> {
    
    cy.visit('https://the-internet.herokuapp.com/hovers')
    .get('[class="example"]') 
    .should('contains.text', 'Hovers')
    .and('contains.text', 'Hover over the image for additional information')
    .get('[class="figure"]') .eq(0) .trigger('mousehover') 
    .get('[class="figcaption"]') .eq(0) .invoke('show')
    .should('contains.text', 'name: user1')
    .should('contains.text', 'View profile')


   
   
    
})