import React, {useContext} from 'react';
 import './App.css';
import Container from './Container';
import BackgroundContext, {BackgroundProvider} from './contexts/BackgroundContext';
 
function App() {

   return (
     <div className="App">
        <BackgroundProvider>
              <Container/>
          
        </BackgroundProvider>
      </div>
    //  <Container/>
  );
}

export default App;
