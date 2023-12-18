import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MyForm from './components/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './components/Read'

function App() {
  

  return (
    <>
     <Navbar />
    <BrowserRouter>
    <Routes>
        
        <Route path='/' element={<MyForm />} />
        <Route path='/read' element={<Read />} />
        


    </Routes>
    </BrowserRouter>
      
     
    </>
  )
}

export default App
