describe("Creación y hospedaje de mascota", () => {
  it("Debería mostrar mensaje de error si no se llena el formulario correctamente.", () => {
     // Empezar desde la pantalla de login
     cy.visit("http://localhost:4200/auth/login");
     cy.get("#email").type("test@gmail.com");
     cy.get("#password").type("Pa$$word123");
     cy.get("#btn").click();
 
     // Navegar hasta el formulario de mascota
     cy.get("#navMascotas").click();
     cy.get("#irACrearMascota").click();
     
     // Hacer click en el formulario de la mascota
     cy.get("#inNombreMascota").click();
     cy.get("#inEdadMascota").click();
     cy.get("#inEspecieMascota").click();
     cy.get("#inRazaMascota").click();
     cy.get("#inComportamientoMascota").click();
     cy.get("#inContactoVetMascota").click();
     cy.get("#inComentarioMascota").click();

     // Validacion 
     cy.get('#inNombreMascota').should('have.class', 'is-invalid');
     cy.contains('.invalid-feedback', 'Nombre es requerido').should('be.visible');
     
     cy.get('#inEdadMascota').should('have.class', 'is-invalid');
     cy.contains('.invalid-feedback', 'Edad es requerida').should('be.visible');
     
     cy.get('#inEspecieMascota').should('have.class', 'is-invalid');
     cy.contains('.invalid-feedback', 'Especie es requerida').should('be.visible');
     
     cy.get('#inRazaMascota').should('have.class', 'is-invalid');
     cy.contains('.invalid-feedback', 'Raza es requerida').should('be.visible');
     
     cy.get('#inContactoVetMascota').should('have.class', 'is-invalid');
     cy.contains('.invalid-feedback', 'Contacto del veterinario es requerido').should('be.visible');

     cy.get("#btnGuardarMascota").should("be.disabled");

  });
  
  it("Debería de dejar crear mascotas llenando el formulario con la información correspondiente.", () => {
    
    // Empezar desde la pantalla de login
    cy.visit("http://localhost:4200/auth/login");
    cy.get("#email").type("test@gmail.com");
    cy.get("#password").type("Pa$$word123");
    cy.get("#btn").click();

    // Navegar hasta el formulario de mascota
    cy.get("#navMascotas").click();
    cy.get("#irACrearMascota").click();
    
    // Llenar el formulario de la mascota
    cy.get("#inNombreMascota").type("Coco Saurio");
    cy.get("#inEdadMascota").type("4");
    cy.get("#inEspecieMascota").type("Perro");
    cy.get("#inRazaMascota").type("Bull Dog");
    cy.get("#inComportamientoMascota").type("Amigable");
    cy.get("#inContactoVetMascota").type("12345678");
    cy.get("#inComentarioMascota").type("Coco Saurio es muy amigable y curioso, tratenlo bien.");

    cy.intercept('POST', 'http://localhost:3000/mascota').as('postRequestMascota');

    // Guardar Mascota
    cy.get("#btnGuardarMascota").click();

    let mascota;

    cy.wait('@postRequestMascota').then(interception => {
      // Verifica el status de la respuesta
      expect(interception.response.statusCode).to.equal(201);

      mascota = interception.response.body.mascota;
      
      cy.url().should("include", "mascotas");
      cy.get(`#${mascota.id_mascota}`).click();

      cy.get("#fechaHospedarMascota").type("2024-01-01");
      
      // Hospedar mascota
      cy.intercept("POST", "http://localhost:3000/hospedarMascota").as("postHospedarMascota");
      cy.get("#btnConrifmarHospedaje").click();

      cy.wait("@postHospedarMascota").then(result => {
        expect(result.response.statusCode).to.equal(201);
        cy.get("#span"+mascota.id_mascota).should("have.text", "Hospedado");
        cy.get(`#${mascota.id_mascota}`).should("not.exist");
      });
    });

  });
});
