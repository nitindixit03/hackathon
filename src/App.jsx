import React from 'react'
import MarketPlace from './Components/MarketPlace'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/ui/connectBUtton';
import LandingPage from './Components/LandingPage';
import Authenticate from './Components/authentication';
import Room from "./Components/Room"
import Visitor from "./Components/Visitor";
import Vote from './Components/Vote';
import Winner from './Components/Winner';
import HomePage from './Components/HomePage';

const App = () => {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path="/visitor" element={<Visitor/>}/>
            <Route path="/voting" element={<Vote/>}/>
       
            <Route path="/game" element={<Authenticate/>} />
            <Route path="/marketplace" element={<MarketPlace/>}/>
            <Route path='/win' element={<Winner/>}/>
          </Routes>
        </BrowserRouter>
      </>
  
  )
}

export default App
