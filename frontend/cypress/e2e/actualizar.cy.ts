describe('Reseñas del Hotel', () => {
  
    it("Debería de ingresar reseñas exitosamente", () => {
      cy.visit("http://localhost:4200/auth/login");
      cy.get("#email").type("test@gmail.com");
      cy.get("#password").type("Pa$$word123");
      cy.get("#btn").click();
  
      cy.url().should('include', '/home');
      cy.get("#navPerfil").click();
  
      cy.url().should('include', '/perfil');
        
    
      // Ingresa texto en el campo de reseña
      cy.get("#inputTel").clear();
      cy.get("#inputTel").type("50367150");
  
      // Verifica que el botón "Confirmar" esté habilitado
      cy.get("#btnConfActualizar").should("not.be.disabled");
  
      // Hace clic en el botón "Confirmar"
      cy.get("#btnConfActualizar").click();

      cy.get("#navCerrarSesion").click();
  
      // También puedes verificar elementos específicos en la página /home para asegurarte de que estás en la página correcta
      // cy.get("#titulo").should('have.text', 'Bienvenido Jorge Perez Ordóñez');
    });
  
  });
  