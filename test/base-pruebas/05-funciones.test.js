import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('pruebas en 05-funciones', () => { 

    test('getUser debe retornar un objeto ', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user = getUser();

        expect (testUser).toEqual(user);
    });


    test('getUsuarioActivo debe de retornar un objeto ', () => { 

        const name ='Nestor'

        const user1 = getUsuarioActivo(name);

        expect (user1).toEqual({
            uid: 'ABC567',
            username: name
        });


     })
 });