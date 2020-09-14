import React from 'react';
import JobContextProvider from './context/NewJobContext';
import RenderDetails from './components/RenderDetails'

function App2() {
    return (
        
        <JobContextProvider>
            <RenderDetails />
        </JobContextProvider>
  
  
  
      
    );
  }
  
  export default App2;

