import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MyForm from './components/Form'
import { Router, Route, Routes } from 'react-router-dom'
import Read from './components/Read'

function App() {
  

  return (
    <>
       <Navbar />
   
    <Routes>
    
        
        <Route path='/' element={<MyForm />} />
        <Route path='/read' element={<Read />} />
        


    </Routes>
    
      
     
    </>
  )
}

export default App
