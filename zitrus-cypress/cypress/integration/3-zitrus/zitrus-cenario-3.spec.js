describe('Zitrus buscando vaga de Qualidade Junior', () => {
    beforeEach(() => {
        cy.visit('https://jobs.kenoby.com/zitrushealthtech')
    })

    it('clicar no menu carreiras', () => {
        cy.get('.search-query')
            .type('Analista de Qualidade');

        cy.get('a')
            .should('contain','Analista de Qualidade de Software Júnior - Híbrido ou Remoto');
    })

})
