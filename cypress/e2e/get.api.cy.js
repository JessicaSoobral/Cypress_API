
describe('Buscar dispositivos', () => {
    it('Buscar um dispositivo especifico', () => {

        const device_id = '4'
       
        //Chamada 
        cy.buscarDeviceEspecifico(device_id)
            .then((response)=> {
                expect(response.status).equal(200)
                expect(response.body).not.empty
                expect(response.body.id).equal(device_id)
                expect(response.body.name).equal('Apple iPhone 11, 64GB')
                expect(response.body.data).not.empty
                expect(response.body.data.price).not.string
                expect(response.body.data.price).equal(389.99)
                expect(response.body.data.color).not.empty
                expect(response.body.data.color).equal('Purple')

        })    
    });

    it('Buscar um dispositivo inexitente', () => {

        const device_id = 'xxx'
       
        //Chamada 
        cy.buscarDeviceEspecifico(device_id)
            .then((response)=> {
                expect(response.status).equal(404)
                expect(response.body.error).equal(`Oject with id=${device_id} was not found.`)
                
        })    
    });
});





