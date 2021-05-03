import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Booking from './components/Booking/Booking';
import {DataContext} from './context/DataContextProvider'

function App() {
  return (
    <div className="App">
      <Navbar />
      <DataContext.Consumer>
        {({phase}) => 
          phase === 0 ? (<LandingPage/>) : (<Booking />)
        }
      </DataContext.Consumer>
    </div>
  );
}

export default App;
