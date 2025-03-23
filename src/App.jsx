import React from 'react'
import MarketPlace from './Components/MarketPlace'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/ui/connectBUtton';
import LandingPage from './Components/LandingPage';
import AUthenticate from './Components/authentication';
import HomePage from './Components/HomePage';
import Vote from './Components/Vote';



const App = () => {
  return (
      <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Vote />} />
          <Route path="/login" element={<LandingPage />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/home" element={<HomePage />} /> {/* Add this route */}
        </Routes>
        </BrowserRouter>
      </>
  
  )
}

export default App
