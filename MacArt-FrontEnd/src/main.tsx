import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importa os estilos globais
import './styles/global.css';

//
// React.StrictMode ajuda a encontrar problemas no código
// durante o desenvolvimento.
//
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);