import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";




describe('Pruebas en FirstApp', () => { 

    // test('debe hacer match con el snapshot', () => { 

    //     const title = 'Hola, soy Nestor';
    //     const { container } = render( <FirstApp title={ title }/> );

    //     expect( container ).toMatchSnapshot();

    //  });

    test('Debe mostrar el titulo en h1', () => { 

        const title = 'Hola, soy Nestor';
        const{ container,getByText,getByTestId } = render( <FirstApp title={ title }/>);
        expect( getByText( title )).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toContain( title )
        expect( getByTestId('test-title').innerHTML).toContain( title )
    });
    

    test('debe mostrar el subtitulo enviado por props', () => { 
    
        const title = 'Hola, soy Nestor';
        const subTitle = 'Hola, soy un subtitulo'
        const{ getAllByText } = render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            />);
        expect( getAllByText( subTitle ).length).toBe(2);
    
        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toContain( title )
    });
});