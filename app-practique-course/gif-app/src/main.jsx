import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* El modo estricto nos ayuda a hacer que todo funcione correctamente, y indicandonos erros en react. */}
    <GifExpertApp />
  </React.StrictMode>
);
