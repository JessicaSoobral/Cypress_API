

Cypress.Commands.add('buscarDeviceEspecifico', (device_id) => {

cy.request({
    method: 'GET',
    url: `/objects/${device_id}`,
    failOnStatusCode: false
}).then((response)=> { return response})

}),

Cypress.Commands.add('cadastrarDevice', (body) => {

    cy.request({
        method: 'POST',
        url: '/objects',
        failOnStatusCode: false,
        body:body
    }).then((response)=> { return response})
    
    })