describe('Login - Etapa 1', () => {
  beforeEach(() => {
    cy.viewport(1920 , 1080);
    cy.visit('https://stage.sumasolution.com/login/');
  });

  it('Login', () => {
    cy.get('.suma-responsive-1_89 > .suma-flex-direction-column > .suma-background-transparent')
      .should('be.visible')
      .click();
      cy.wait(200)

    cy.get('sc-select-third > .suma-width-full')
      .should('be.visible')
      .select('Colombia');
      cy.wait(200)

    cy.get('.suma-gap-y-35 > :nth-child(2) > .suma-width-full')
      .should('be.visible')
      .type('223456789');
      cy.wait(200)

    cy.get('.suma-border-bottom-default > .suma-width-full')
      .should('be.visible')
      .type('Meteoro2021*+');
      cy.wait(200)

      cy.get('.suma-width-177')
      .should('be.visible')
      .click();
      cy.wait(200)


  });

 
}); 
