import { getSaludo } from "../../src/base-pruebas/02-template-string";

 describe('pruebas en 02-template-string.js', () => { 
    
    test ( 'getSaludo debe retornar "Hola Nestor', () => {

        const name = 'Nestor';
        const message = getSaludo ( name );

        expect( message ).toBe( `Hola ${ name }` )
    });
  })