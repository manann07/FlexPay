import Navbar from './componet/Navbar'
import Hero from './componet/Hero'
import WHY from './componet/WHY'
import HOW from './componet/HOW'
import FAQ from './componet/FAQ'
import FOOTER from './componet/FOOTER'
import Login from "./pages/login"
import Register from "./pages/register"
import Home from './pages/Home'
import Contact from './pages/Contact'
import React from "react";
import { BrowserRouter, Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import RootLayout from './layout/Rootlayout'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path='why-us' element={<WHY/>} />
        <Route path='How-it-works' element={<HOW/>} />
      </Route>
      <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}
export default App
