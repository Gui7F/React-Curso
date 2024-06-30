import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ExemploContextProvider } from './context/ExemploContext';
import { TitleColorContextProvider } from './context/TitleColorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
  <ExemploContextProvider>
   {/* 2-Encaspsulando o app com contexto, deixando o contexto Global */}
  <TitleColorContextProvider>
    {/* 5-contexto mais complexo */}
    <App />
  </TitleColorContextProvider>
  </ExemploContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
