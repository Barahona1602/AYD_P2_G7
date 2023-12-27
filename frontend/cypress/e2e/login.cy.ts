import { LoginComponent } from "src/app/auth/login/login.component"
// import { mount } from "cypress/angular"

describe('login', () => {
  it('Deberia iniciar con los input vacios y el boton deshabilitado', () => {
    cy.visit("http://localhost:4200/auth/login");
    cy.get("button").should("be.disabled");
    cy.get("#email").should("be.empty");
    cy.get("#password").should("be.empty");
  });

  it('Debería de Dar error con contraseña invalida', () => {
    cy.visit("http://localhost:4200/auth/login");

    cy.get("#email").type("cualquier.correo@gmail.com");
    cy.get("#password").type("contraseña invalida");
    cy.get("#btn").click();
  });

})