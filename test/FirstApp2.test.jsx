import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";




describe('Pruebas en FirstApp2', () => { 

    const title = 'Hola, Soy Nestor'
    const subTitle = 'Hola, esto es un subtitulo'

    test('Debe hacer match con el snapshot', () => { 
        const { container } = render( <FirstApp title={ title}/>);
        expect( container ).toMatchSnapshot();
    });
    
    test('Debe de mostrar el mesaje "Hola, soy Nestor"', () => { 
        render( <FirstApp title={ title}/>);
        expect( screen.getByText( title )).toBeTruthy();
    });
    
    test('Debe de mostrar el titulo en un h1', () => { 
        render( <FirstApp title={ title}/>);
        expect( screen.getByRole('heading', { level:1 }).innerHTML).toContain(title);
    });
    
    test('Debe de mostar el subtitulo envviado por props', () => { 
        render( 
            <FirstApp 
                title={ title}
                subTitle={ subTitle }
            />
            );
            expect( screen.getAllByText( subTitle ).length).toBe(2); 
     })
   
});