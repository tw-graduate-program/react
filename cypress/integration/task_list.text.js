describe('task list', function () {
    it('should render all task list with name', function () {
        // Given
        const mockTasks = [
            {
                "id": 1,
                "name": "task 01",
                "completed": false
            },
            {
                "id": 2,
                "name": "task 02",
                "completed": true
            }
        ];
        cy.intercept('GET', Cypress.env('API'), {
            statusCode: 200,
            body: mockTasks,
        });
        // When
        cy.visit('/');
        // Then
        cy.get('.todo-list li').should('have.length', 1);
        cy.get('.completed-list li').should('have.length', 1);
        cy.get('.todo-list li')
            .eq(0)
            .children('input[type=checkbox]')
            .should('not.be.checked')
            .next('label')
            .contains(mockTasks[0].name);
        cy.contains('h3', 'Completed');
        cy.get('.completed-list li')
            .eq(0)
            .children('input[type=checkbox]')
            .should('be.checked')
            .next('label')
            .contains(mockTasks[1].name);
    });
})