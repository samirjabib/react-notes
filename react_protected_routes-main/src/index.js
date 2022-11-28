import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
                  {/* 
                      Este metodo nos sincroniza la interfaz con el html por medio de la url 
                  */}
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} /> 
                                                 {/* 
                                                    Todas las rutas iran hacia el App

                                                 */ }
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);