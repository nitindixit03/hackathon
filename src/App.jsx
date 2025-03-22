import React from 'react'
import MarketPlace from './Components/MarketPlace'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/ui/connectBUtton';
import LandingPage from './Components/LandingPage';
import Authentication from './Components/Authentication'
import HomePage from './Components/HomePage';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/marketplace" element={<MarketPlace/>}/>
      </Routes>
    </BrowserRouter>
  </>
    
    
      // <>
      //   <BrowserRouter>
      //     <Routes>
      //       <Route path="/" element={<LandingPage/>}/>
      //       <Route path="/marketplace" element={<MarketPlace/>}/>
      //     </Routes>
      //   </BrowserRouter>
      // </>
  
  )
}

export default App
