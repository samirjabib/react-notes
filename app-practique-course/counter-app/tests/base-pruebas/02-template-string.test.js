import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en el 02-template-string', () => {
    test('Debe retornar el saludo mas el nombre', () => {
        //1. Init 
        const name = "samir"
        const message = getSaludo(name)

        expect(message).toBe(`Hola ${name}`)
    });
});