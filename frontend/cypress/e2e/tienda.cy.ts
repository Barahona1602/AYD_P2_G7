describe('Reseñas del Hotel', () => {
  
    it("Debería de ingresar reseñas exitosamente", () => {
      cy.visit("http://localhost:4200/auth/login");
      cy.get("#email").type("ryan@gmail.com");
      cy.get("#password").type("Ryan.123");
      cy.get("#btn").click();
  
      cy.url().should('include', '/home');
      cy.get("#navTienda").click();
  
      cy.url().should('include', '/tienda');
      cy.get("#btnCrearProducto").click();
  
      cy.get("#btnConfiProdu").should("be.disabled");
    
    
      // Ingresa texto en el campo de reseña
      cy.get("#inputNombreProducto").type("Correa");
  
      // Ingresa una calificación válida
      cy.get("#inputPrecioProducto").type("45");
  
      cy.get("#inputDescpProducto").type("Correa de cuero para sacar a paseae a tu mascota");    
    
      cy.get("#inputCantProducto").type("3");  
      
      cy.get("#inputImgProducto").type("https://www.google.com/url?sa=i&url=https%3A%2F%2Fpremiumpetcaregt.com%2Fcategoria-producto%2Fperros%2Fcollares-correas-y-arneses%2F&psig=AOvVaw0r_jBSFl_qtwfrShD52Bd7&ust=1703745068471000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjAnqj_roMDFQAAAAAdAAAAABAE"); 
    
      // Verifica que el botón "Confirmar" esté habilitado
      cy.get("#btnConfiProdu").should("not.be.disabled");
  
      // Hace clic en el botón "Confirmar"
      cy.get("#btnConfiProdu").click();
  
      // También puedes verificar elementos específicos en la página /home para asegurarte de que estás en la página correcta
      // cy.get("#titulo").should('have.text', 'Bienvenido Jorge Perez Ordóñez');
    });
  
  });
  