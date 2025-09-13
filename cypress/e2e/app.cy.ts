// cypress/e2e/app.cy.ts
describe('Application Smoke Test', () => {
  it('should load the application and find the root element', () => {
    cy.visit('http://localhost:5173'); // Assuming Vite's default dev server port
    cy.get('#root').should('exist');
  });
});