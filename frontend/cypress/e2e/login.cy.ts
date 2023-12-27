describe('login', () => {
  it('Deberia iniciar con los input vacios y el boton deshabilitado', () => {
    cy.visit("http://localhost:4200/auth/login");
    cy.get("button").should("be.disabled");
    cy.get("#email").should("be.empty");
    cy.get("#password").should("be.empty");
  });

  it('Debería de dar error con correo y/o contraseña invalida', () => {
    cy.visit("http://localhost:4200/auth/login");

    cy.get("#email").type("cualquier.correo@gmail.com");
    cy.get("#password").type("contraseña invalida");
    cy.get("#btn").click();
    cy.get("#alert")
    .should("be.visible")
    .invoke("text")
    .then((text) => {
      const trimmedText = text.trim();
      expect(trimmedText).to.equal("Usuario o contraseña incorrectos");
    });
  });

  it("Debería de ser exitoso si se ingresan datos válidos para el inicio de sesión y redirigir a la pantalla home", () => {
    cy.visit("http://localhost:4200/auth/login");
    cy.get("#email").type("test@gmail.com");
    cy.get("#password").type("Pa$$word123");
    cy.get("#btn").click();

    // Espera a que se redirija a la ruta /home
    cy.url().should('include', '/home');

    // También puedes verificar elementos específicos en la página /home para asegurarte de que estás en la página correcta
    cy.get("#titulo").contains("Bienvenido").should("exist");
  });
});