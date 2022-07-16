describe('Rozetke', () => {
    it('By', ()=>{
     cy.visit('https://rozetka.com.ua/')
     cy.viewport(1920, 1080)
     cy.get('input[name="search"]') .type ("Презервативы латексные")
     cy.contains ('Найти') .click ()
     cy.contains ('Презервативы латексные с силиконовой смазкой Contex Extra Large (увеличенного размера) 12 шт (5060040302231)') .click ()
     cy.contains ('Купить') .click ()
     cy.contains ('Оформить заказ') .click ()


    })
})
// Презервативы латексные с силиконовой смазкой Contex Extra Large (увеличенного размера) 12 шт (5060040302231)