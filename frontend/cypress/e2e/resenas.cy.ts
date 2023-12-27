describe('Reseñas del Hotel', () => {
  
  it("Debería de ingresar reseñas exitosamente", () => {
    cy.visit("http://localhost:4200/auth/login");
    cy.get("#email").type("pablo@gmail.com");
    cy.get("#password").type("Pablo.123");
    cy.get("#btn").click();

    cy.url().should('include', '/home');
    cy.get("#navResena").click();

    cy.url().should('include', '/resena');
    cy.get("#btnDejarResena").click();

    cy.get("#btnConfResena").should("be.disabled");
  
  
    // Ingresa texto en el campo de reseña
    cy.get("#textResena").type("Esta es una reseña de prueba");

    // Ingresa una calificación válida
    cy.get("#inputCali").type("4");

    // Verifica que el botón "Confirmar" esté habilitado
    cy.get("#btnConfResena").should("not.be.disabled");

    // Hace clic en el botón "Confirmar"
    cy.get("#btnConfResena").click();

    // También puedes verificar elementos específicos en la página /home para asegurarte de que estás en la página correcta
    // cy.get("#titulo").should('have.text', 'Bienvenido Jorge Perez Ordóñez');
  });

});
