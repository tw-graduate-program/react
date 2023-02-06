describe('add task', function () {
  it('should render todo input', function () {
    cy.visit('/');
    const inputs = 'input todo';
    cy.get('.todo-input')
      .should('have.attr', 'placeholder', 'Enter your todo item')
      .type(inputs)
      .should('have.value', inputs)
  });
})