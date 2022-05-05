import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const myName = 'Stanislav';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name={myName} />
  </React.StrictMode>
);