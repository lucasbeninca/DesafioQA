describe('zitrus filtrando blog', () => {
    beforeEach(() => {
        cy.visit('https://zitrus.com.br/')
    })

    it('Verificar se titulo Blog existe e acessar o blog', ()=> {
        cy.get('a.elementor-item')
            .should('contain','Blog');
        cy.get('.elementor-sticky--active > .elementor-container > .elementor-row > .elementor-element-6bf5647 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element-d6cf617 > .elementor-widget-container > .elementor-nav-menu--main > #menu-1-d6cf617 > .menu-item-2035 > .elementor-item')
            .click();
        cy.get('h2.elementor-heading-title.elementor-size-default')
            .should('contain','Navegue pelas categorias')
        cy.get('div.filter-items')
            .should('contain','Saúde')
        cy.get('.aep-filter-bar > :nth-child(2)')
            .click();
        cy.get('.ae-element-post-title')
            .should('contain','Saúde Mental dos Colaboradores');


    })

})