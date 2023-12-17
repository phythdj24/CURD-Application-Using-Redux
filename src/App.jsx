import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MyForm from './components/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
     <Navbar />
    <BrowserRouter>
    <Routes>
        
        <Route path='/' element={<MyForm />} />
        


    </Routes>
    </BrowserRouter>
      
     
    </>
  )
}

export default App
