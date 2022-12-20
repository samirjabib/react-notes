import { getImagen } from "../../src/base-pruebas/11-async-await";


describe('Pruebas en async Await 11', () => {
    test('getImagen debe retornar un error si no tenemos api key', async() => {
        const resp = await getImagen();
        // expect( typeof url ).toBe('string');
        expect( resp ).toBe('No se encontro la imagen');
    });
});