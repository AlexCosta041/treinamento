// articles.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
describe('Artigos', () => {

  it('Criar um novo artigo', function () {
    /* ==== Generated with Cypress Studio ==== */

   cy.login()


    cy.get('a[href$=editor]').click();
    cy.get('input[placeholder="Article title"]').type('teste alex');
    cy.get('input[placeholder="What is this article about?"]').type('alex teste');
    cy.get('form textarea').type('testando agora para ver')
    cy.get('input[placeholder="Enter tags"]').type('alex');
    cy.get('button.btn-primary').contains('Publish article').click();


    cy.get('h1').should('contain.text', 'teste alex')
    /* ==== End Cypress Studio ==== */
  });


});

