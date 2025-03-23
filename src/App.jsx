import React from 'react'
import MarketPlace from './Components/MarketPlace'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/ui/connectBUtton';
import LandingPage from './Components/LandingPage';
import AUthenticate from './Components/authentication';
import Room from "./Components/Room"
import Visitor from "./Components/Visitor";
import PodiumPage from './Components/PodiumPage';
import HomePage from './Components/HomePage';

const App = () => {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PodiumPage/>}/>
            <Route path="/visitor" element={<Visitor/>}/>
            <Route path='/room' element={<Room/>}/>
            <Route path="/login" element={<AUthenticate/>} />
            <Route path="/marketplace" element={<MarketPlace/>}/>
          </Routes>
        </BrowserRouter>
      </>
  
  )
}

export default App
