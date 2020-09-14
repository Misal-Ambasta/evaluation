import React from 'react';
import './App.css';
import Homepage from './coding-1/components/Homepage';
import AuthContextProvider from './coding-1/context/AuthContextProvider'

function App() {
  return (
   
      <AuthContextProvider>
        <Homepage />
        </AuthContextProvider>
    
  );
}

export default App;
