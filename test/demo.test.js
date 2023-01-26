
describe('pruebas en < DemoComponent />', () => {

    test('Esta prueba no deb e de fallar', () => { 
        
        // 1. inicializacion
        const message1 = 'Hola Mundo'
    
        // 2. estimulo
        const message2 = message1.trim();
    
        // 3. Observar el comprtameinto ....esperado
        expect (message1).toBe(message2);
    
    
    
     })
 })
