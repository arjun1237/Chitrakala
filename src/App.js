import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Booking from './components/Booking/Booking';


function App() {
  return (
    <div className="App">
        <Navbar />
        {/* <LandingPage/> */}
        <Booking />        
    </div>
  );
}

export default App;
