describe('add task', function () {
  beforeEach(() => {
    cy.intercept('GET', Cypress.env('API'), {
      statusCode: 200,
      body: []
    });
    cy.visit('/');
  });

  it('should render todo input', function () {
    cy.visit('/');
    const inputs = 'input todo';
    cy.get('.todo-input')
      .should('have.attr', 'placeholder', 'Enter your todo item')
      .type(inputs)
      .should('have.value', inputs)
  });

  it('should add todo item', function () {
      const inputs = 'task 01';
      cy.get('.todo-input').type(inputs);
    cy.get('.todo-list li').should('have.length',1).contains(inputs);
  });
});