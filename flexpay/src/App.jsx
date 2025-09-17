import Navbar from './componet/Navbar'
import Hero from './componet/Hero'
import WHY from './componet/WHY'
import HOW from './componet/HOW'
import FAQ from './componet/FAQ'
import FOOTER from './componet/FOOTER'
import Login from "./pages/login"
import Register from "./pages/register"
import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
       
      <Hero/>
      <WHY/>
      <HOW/>
      <FAQ/>
      <FOOTER/>
    </>
  )
}
export default App
