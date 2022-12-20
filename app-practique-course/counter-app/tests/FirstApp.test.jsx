import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp', () => {
    // test('debe de mostrar el titulo en un h1', () => {
    //     const title ='hola, soy goku'
    //     const { container} = render(<FirstApp title={title}/>);//El render es un objeto que nos expone ciertas propiedades
        
    //     expect(container).toMatchSnapshot();
    // });


    
    test('debe de mostrar el título en un h1', () => {
        
        const title = 'Hola, Soy Goku';
        const {  getByText, getByTestId } = render( <FirstApp title={ title } /> );
        expect( getByText(title) ).toBeTruthy(); //El metodo by text nos busca en los nodos el title

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title )
        expect( getByTestId('test-title').innerHTML ).toContain(title)

    });


    test('debemostrar el subtitulo enviado por props', () => {
        const title = 'hola, soy goku';
        const subTitle = ' soy un subtitulo';
        const {getAllByText} = render(
            <FirstApp
                title={title}
                subtitle={subTitle}
            />

        )
    });

});