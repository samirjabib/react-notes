
describe( 'Pruebas en <DemoComponent/>', () => { //Con describe podemos agrupar la prueba para ponerle un titulo descriptivo
    
    test('esta prueba no debe de fallar', () => {
        // 1. Inicializacion
        const message1 = "hello world"
    
        //2. Estimulo

        const message2 = message1.trim()
        // 3. Observar el comportamiento 
        expect(message1).toBe(message2); //Con esto le decimos que esperamos que el mensaje 1 sea igual al mensaje 2 el toBe tiene que ser en camel case
        
    })
})

