import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Home from './Components/Home'
import Appointment from './Components/Appointment'
import Shop from './Components/Shop'


const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/docmeds" element={<Home/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/shop" element={<Shop/>}/>       
      </Routes>
      <Footer/>
    </>
  )
}

export default App
