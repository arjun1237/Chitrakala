import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Booking from './components/Booking/Booking';
import ConformationPage from './components/Booking/ConformationPage'
import SummaryPage from './components/Booking/SummaryPage'

function App() {
  return (
    <div className="App">
        <Navbar />
        {/* <LandingPage/> */}
        {/* <Booking /> */}
        <ConformationPage />      
        <SummaryPage />      
    </div>
  );
}

export default App;
