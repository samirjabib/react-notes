import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 

import { HeroesApp } from './HeroesApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

                    {/* Ese Router nos permite mantener la UI sincronizada con el url
                    por medio del HTML5 
    
                    Mas info... https://v5.reactrouter.com/web/api/BrowserRouter
                    */}
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);
