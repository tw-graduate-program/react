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
        cy.get('li').should('have.length', 2);
        cy.get('li').eq(0).children('input[type=checkbox]').next('label').contains(mockTasks[0].name);
        cy.get('li').eq(1).children('input[type=checkbox]').next('label').contains(mockTasks[1].name);
    });
})