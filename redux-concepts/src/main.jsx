import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App'
import './index.css'
import { PokemonApp } from './PokemonApp';

import { store } from './store';
import { TodoApp } from './TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      {/* /*El provider nos sirve para proveer la store de nuestro contexto creado con redux de manera global, ya que este nos
      permitira coger los datos que tengamos dentro de este en sin importar en que nivel de la App nos encontremos */ }
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
)
