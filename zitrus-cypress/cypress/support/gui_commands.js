Cypress.Commands.add('contato',(nome,email,empresa) =>{
    cy.get('input[id="rd-text_field-kruzfvbk"]').type(nome);
    cy.get('input[id="rd-email_field-kruzfvbl"]').type(email);
    cy.get('input[id="rd-text_field-kruzfvbm"]').type(empresa);
    cy.get('button[id="rd-button-kruzaryr"]').click();
})