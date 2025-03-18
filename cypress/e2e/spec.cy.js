describe('Registro - Etapa 1', () => {
  beforeEach(() => {
    // Configurar el tamaño del viewport para que coincida con 1000x660
    cy.viewport(1368 , 768 );
    // Visitar la URL de la etapa de registro
    cy.visit('https://stage.sumasolution.com/login/register/stage/one');
  });

  it('debería cargar la página y permitir la interacción correcta', () => {
    // Verificar que el botón o elemento principal esté visible y hacer click
    cy.get('.bg-color-primary-indigo')
      .should('be.visible')
      .click();

    // Interactuar con el primer select: Seleccionar "Colombia"
    cy.get(':nth-child(1) > sc-select-third > .suma-width-full')
      .should('be.visible')
      .select('Colombia');

    // Interactuar con el segundo select: Seleccionar "Antioquia"
    cy.get(':nth-child(2) > sc-select-third > .suma-width-full')
      .should('be.visible')
      .select('Antioquia');

    // Interactuar con el tercer select: Seleccionar "Medellín"
    cy.get(':nth-child(3) > sc-select-third > .suma-width-full')
      .should('be.visible')
      .select('Medellín');

      cy.get('.next-button > .fi')
      .should('be.visible')
      .click();

      cy.get('.suma-gap-y-42 > :nth-child(1) > .suma-width-full')
      .should('be.visible')
      .type('Suma Ramix');

      cy.get('.suma-gap-y-42 > :nth-child(2) > .suma-width-full')
      .should('be.visible')
      .type('912384723'); 

      cy.get('.next-button')
      .should('be.visible')
      .click();


      cy.get('.suma-align-wrap > :nth-child(1) > .suma-width-full')
      .should('be.visible')
      .type('Juan');

      cy.get('.suma-align-wrap > :nth-child(2) > .suma-width-full')
      .should('be.visible')
      .type('Vasquez');


      cy.get(':nth-child(3) > .suma-width-full')
      .should('be.visible')
      .type('Juan.vasquez@suti.com.co');

      cy.get('#document-register')
      .should('be.visible')
      .type('223456789');

      cy.get('sc-select-third > .suma-width-full')
      .should('be.visible')
      .select('Colombia');

      cy.get(':nth-child(1) > .suma-border-bottom-default > .suma-width-full')
      .should('be.visible')
      .type('Meteoro2021*+');

      cy.get(':nth-child(2) > .suma-border-bottom-default > .suma-width-full')
      .should('be.visible')
      .type('Meteoro2021*+');

      cy.get('.white_brand')
      .should('be.visible')
      .click();

      cy.get('.suma-padding-0 > .control_primary')
      .should('be.visible')
      .click();

  });
});
