import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';

store.dispatch(fetchUsers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
                        {/* Usamos nuestra store para proveer a la app del contexto de redux.  */ }
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
