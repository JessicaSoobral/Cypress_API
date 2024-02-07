
describe('Deletar Dispositivos', () => {
    it('Deletar um dispositivo ', () => {

        const body = {
            "name": "Celular Qazando",
            "createdAt": "2024-02-07T17:12:20.455+00:00",
            "data": {
                "year": 2024,
                "price": 389.99,
                "color": "Purple",
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
                "ownwer": "Qazando",
            }
        }

        cy.cadastrarDevice(body)
            .then((response_post) => {
            //Pegando o resultaod do cadastro para pegar o id
               expect(response_post.status).equal(200)

            cy.request({
                method: 'DELETE',
                url: `/objects/${response_post.body.id}`,
                failOnStatusCode: false,
            }).as('deleteDeviceResult')

            //validações do delete
            cy.get('@deleteDeviceResult').then((response_del) => {
                expect(response_del.status).equal(200)
                expect(response_del.body.message).equal(`Object with id = ${response_post.body.id} has been deleted.`)
            })
        })

    });

    it('Deletar um dispositivo que não existe', () => {

        const id_inexistente = 'test'

            cy.request({
                method: 'DELETE',
                url: `/objects/${id_inexistente}`,
                failOnStatusCode: false,
            }).as('deleteDeviceResult')

            //validações do delete
            cy.get('@deleteDeviceResult').then((response_del) => {
                expect(response_del.status).equal(404)
                expect(response_del.body.error).equal(`Object with id = ${id_inexistente} doesn't exist.`)
            })
        })

    });


