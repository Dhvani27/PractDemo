/// <reference types = 'cypress' />

describe('Test practice' , function()
{
    it('Test Case ',() =>{

        cy.visit('http://automationpractice.com/index.php')

        cy.get('ul#homefeatured>li:nth-of-type(5)').click();
        cy.get('span.cross').click({ force: true });
        cy.wait(3000);

        cy.contains('automationpractice').trigger('mouseover');
        
    })
    it('adding one more it block for git branch', ()=>{
        
    })


})