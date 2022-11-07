describe('Zitrus buscando Botão acessar as vagas', () => {
    beforeEach(() => {
        cy.visit('https://zitrus.com.br/')
    })

    it('verificar menu Carreiras', () => {
        cy.get('a.elementor-item')
            .should('contain','Carreiras');
        cy.get('.elementor-sticky--active > .elementor-container > .elementor-row > .elementor-element-6bf5647 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element-d6cf617 > .elementor-widget-container > .elementor-nav-menu--main > #menu-1-d6cf617 > .menu-item-2248 > .elementor-item')
            .click();

        cy.get('.elementor-element-7b3c958 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link')
            .should('contain.text','Acessar as vagas');

    })

})