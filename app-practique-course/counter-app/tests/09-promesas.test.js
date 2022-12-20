import { getHeroeByIdAsync } from "../src/base-pruebas/09-promesas";


describe('Pruebas en promesas', () => {
    test('getHeoreByIdAsync debe retornar un heore', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {
                expect(hero).toEqual({
                    id:1,
                    name:'Batman',
                    owner:'DC'
                });

                done(); //Con esto le indicamos que la promesa se ha reseulto
            })
    });

    test('getHeoreByIAsync debe obtener un error si heore no exite', (done) => {

        const id = 100;
        getHeroeByIdAsync( id ) 
            .then( hero => {
                expect( hero ).toBeFalsy();
                done();
            })
            .catch( error => { //Tambien debemos hacer el test a los catch para saber que esta devolviendo el herrore en las promesas

                expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`);
                done();
            })


    })
});