const body_put = require ('../fixtures/updateDeviceSucesso.json')
const body_cadastro  = require ('../fixtures/cadastrarDeviceSucesso.json')
 

describe('Deletar Dispositivos', () => {
    it('Deletar um dispositivo ', () => {
    
        cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: body_cadastro
        }).as('postDeviceResult')

        //Pegando o resultao de um cadastro para pegar o id
        cy.get('@postDeviceResult').then((response_post) => {
            expect(response_post.status).equal(200)
            expect(response_post.body.name).equal(body_cadastro.name)


        // Fazendo um PUT
        cy.request({
            method: 'PUT',
            url: `/objects/${response_post.body.id}`,
            failOnStatusCode: false,
            body: body_put
            }).as('putDeviceResult')

        //Validações do PUT
        cy.get('@putDeviceResult').then((response_put) => {
            expect(response_put.status).equal(200)
            expect(response_put.body.name).equal(body_put.name)
            })
        })

    });
});