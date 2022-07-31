import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//bootstrap. primeiro arquivo renderizado
//StrictMode ajuda o front-end, ajuda a previnir erros
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

