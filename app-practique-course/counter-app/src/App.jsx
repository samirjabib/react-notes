import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';

import './styles.css'







ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* Enviamos el valor inicial del contador mediante props 
            
            ¿ Que son los props ? 

                Las props son las propiedades que contiene un compontente funcional que necesitamos para
                poder pasar como argumentos cosas que deben cambiar cada vez que se re-ultilize. 

                    const Example = ( {props } )  => {
                        return(
|                      <div>Props</div>
                        )
                    }
        */}
        <CounterApp value={ 0 } />
    </React.StrictMode>
);


/*
    ¿Que son las props?

*/