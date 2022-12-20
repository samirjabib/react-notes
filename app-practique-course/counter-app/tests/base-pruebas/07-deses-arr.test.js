import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";




describe('Test desesctuctured array 07', () => {
    test('debe retornar un string y un numero ', () => {
        const [ letters, numbers] = retornaArreglo();


        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String));
    });
});