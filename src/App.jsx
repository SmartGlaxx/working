import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import UpdateTask from './components/UpdateTask'

const App = ()=>{
  return <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Tasks />} exact/>
          <Route path="/create-task" element={<Tasks />} exact/>
          <Route path="/update-task/:id" element={<UpdateTask />} exact/>
        </Routes>
    </BrowserRouter>
}


export default App
