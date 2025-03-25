describe('Login - Etapa 1', () => {
    beforeEach(() => {
      cy.viewport(1920 , 1080);
      cy.visit('https://stage.sumasolution.com/login/');
    });
  
    it('Login', () => {
      cy.get('.suma-responsive-1_89 > .suma-flex-direction-column > .suma-background-transparent')
        .should('be.visible')
        .click();
        cy.wait(500);
  
      cy.get('sc-select-third > .suma-width-full')
        .should('be.visible')
        .select('Colombia');
        cy.wait(500);
  
      cy.get('.suma-gap-y-35 > :nth-child(2) > .suma-width-full')
        .should('be.visible')
        .type('223456789');
        cy.wait(500);
  
      cy.get('.suma-border-bottom-default > .suma-width-full')
        .should('be.visible')
        .type('Meteoro2021*+');
        cy.wait(500);
  
      cy.get('.suma-width-177')
        .should('be.visible')
        .click();
        cy.wait(500);
        
      cy.get('.suma-flex-between > :nth-child(3)')
        .should('be.visible')
        .click();
        cy.wait(500);

      cy.get('.suma-height-24')
        .should('be.visible')
        .click();
        cy.wait(500);

      cy.get('.profile-nav-items-container > :nth-child(1)')
        .should('exist')
        .should('be.visible')
        .click();
        cy.wait(500);

        cy.get(':nth-child(1) > .profile-nav-text > .nav-title')
        .should('exist')
        .should('be.visible')
        .click();
        cy.wait(500);

      cy.get('.suma-center-between > .white_brand_background')
        .should('exist')
        .should('be.visible')
        .click();
        cy.wait(500);

      
      const timestamp = new Date().getTime(); 
      const uniqueTestName = `test${timestamp}`;

      // Ingresar el nombre único generado en el campo
      cy.get('.suma-wrap-between > :nth-child(1) > .suma-width-245')
        .should('be.visible')
        .type(uniqueTestName);
        cy.wait(500); 

      cy.get('suma-search-staff > .suma-position-relative > .suma-width-height-full')
        .should('be.visible')
        .click();
        cy.wait(500);

        cy.get('suma-search-staff > .suma-position-relative > .suma-width-height-full')
        .should('be.visible')
        cy.get('.ant-select-item-option-content')
        cy.wait(500);

        cy.get('.ant-select-item-option-content > .suma-display-flex')
        .should('be.visible')
        .click();
        cy.wait(500);

        cy.get('.suma-width-618')
        .should('be.visible')
        .type('Testing QA, pruebas automatizadas');
        cy.wait(500);

        cy.get('.btn-icon > .suma-font-s-13')
        .should('be.visible')
        .click();
        cy.wait(500);


    });
  });
