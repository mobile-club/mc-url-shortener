describe('should add a message', () => {
  it('should ', () => {
    const randomNumber = Math.round(Math.random() * 10);
    const message = `MobileClub!${randomNumber}`;

    cy.visit('http://localhost:3000');
    cy.dataCy('messageInput').type(message);
    cy.dataCy('submit').click();
    cy.dataCy('messageContainer').contains(message);
  });
});
