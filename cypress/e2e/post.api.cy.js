const body_cadastro_device = require('../fixtures/cadastrarDeviceSucesso.json')
describe('Cadastro de Dispositivos', () => {
    it('Cadastrar um dispositivo ', () => {

        const dataAtual = new Date().toISOString().slice(0, 10)

        cy.cadastrarDevice(body_cadastro_device)
            .then((response)=> {
                expect(response.status).equal(200)
                expect(response.body.id).not.empty
                expect(response.body.createdAt).not.empty
                expect(response.body.createdAt.slice(0, 10)).equal(dataAtual)
                expect(response.body.name).equal("Celular Qazando")
                expect(response.body.data).not.empty
                expect(response.body.data.price).not.string
                expect(response.body.data.price).equal(389.99)
                expect(response.body.data.color).not.empty
                expect(response.body.data.color).equal('Purple')
                expect(response.body.data['CPU model']).not.empty
                expect(response.body.data['CPU model']).equal('Intel Core i9')
            })
    });
    it('Cadastrar um dispositivo sem mandar dados', () => {

        const dataAtual = new Date().toISOString().slice(0, 10)

        cy.cadastrarDevice()
            .then((response)=> {
                expect(response.status).equal(400)
                expect(response.body.error).equal(`400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.`)
            })
    });

});