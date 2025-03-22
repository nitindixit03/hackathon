import React from 'react'
import MarketPlace from './Components/MarketPlace'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/ui/connectBUtton';


const App = () => {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/marketplace" element={<MarketPlace/>}/>
          </Routes>
        </BrowserRouter>
      </>
  
  )
}

export default App
