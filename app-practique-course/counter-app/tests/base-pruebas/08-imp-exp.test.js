import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('test for heores functions', () => {
    test('debe regresar el heore con el mismo id  ', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect( hero ).toEqual({ id:1, name:'Batman', owner: 'DC'})
    });

    test('debe retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id)
        expect(hero).toBeFalsy();//Esta funcion nos dice que espera un resultado que sea falso, en caso de no existir
    });

    test('Debe regresarnos los heores hechos por DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect(heroes).toEqual( heroes.filter ( (heore) => heore.owner === owner)); //Usamos el filter para devolver las considencias. 
    });


    test('getHeoresByOwner debe regresar los heores de marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe( 2 );
        expect(heroes).toEqual( heroes.filter( (heore) => heore.owner === owner))
    });
});