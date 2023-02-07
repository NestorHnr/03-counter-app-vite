import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";



describe('Pruebas en CounterApp', () => { 

    const inicialValue = 10;

    test('Debe hacer match con el snapchot', () => { 
        const { container } = render( <CounterApp value = { inicialValue }/>);
        expect( container ).toMatchSnapshot(); 
     });

    test('Debe mostrar el valor inicial de 100 <CountrApp value = { 100 }>', () => { 
        render(<CounterApp value = { 100 }/>)
        expect(screen.getByText( 100 )).toBeTruthy();
    });
    
    test('Debe de incrementar con el boton +1', () => { 
        render(<CounterApp value = { inicialValue }/>);
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11')).toBeTruthy();
     });
     
     test('Debe de incrementar con el boton -1', () => { 
         render(<CounterApp value = { inicialValue }/>);
         fireEvent.click( screen.getByText('-1') );
         expect( screen.getByText('9')).toBeTruthy();
        });
        
    test('Debe de funcionar el boton de reset', () => { 
        render(<CounterApp value = { inicialValue }/>);
        fireEvent.click( screen.getByText('-1') );
        fireEvent.click( screen.getByText('-1') );
        fireEvent.click( screen.getByText('-1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}));
        expect( screen.getByText( 10 )).toBeTruthy();
       });
 });