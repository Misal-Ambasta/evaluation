import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthContextProvider from './coding-1/context/AuthContextProvider'


ReactDOM.render(
  <AuthContextProvider>
    <App />
    </AuthContextProvider>,
  document.getElementById('root')
);
