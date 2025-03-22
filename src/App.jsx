import React from 'react'
import MarketPlace from './Components/MarketPlace'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/ui/connectBUtton';
import LandingPage from './Components/LandingPage';


const App = () => {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/marketplace" element={<MarketPlace/>}/>
          </Routes>
        </BrowserRouter>
      </>
  
  )
}

export default App
