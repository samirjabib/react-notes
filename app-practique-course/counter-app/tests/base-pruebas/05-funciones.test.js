import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('TEST ON FUNCTIONS', () => {
    test('getUser debe retornar un objeto ', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( testUser ).toEqual( user ); //To equal nos sirve para comparar objetos a difernecia de toBe que evalua el tipod e dato

    });

    test('should ', () => {
        const userActive = {
            uid: 'ABC567',
            name:"samir"
        }

        const user = getUsuarioActivo(userActive.name);

        expect(user).toEqual(user)
    });
});