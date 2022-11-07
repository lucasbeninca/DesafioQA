describe('Zitrus buscando Botão acessar as vagas', () => {
    beforeEach(() => {
        cy.visit('https://zitrus.com.br/contato/')
    })

    it('faz novo contato',()=>{
        cy.contains('h2','Fale conosco')
            .should('be.visible');
        cy.contato('Lucas','lucastesteemail','empresateste')
        cy.get('label.error')
            .should('contain','Endereço de e-mail inválido');




    })

})