import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Login, Logout, Register } from './components'
import LogerContext from './context'

import './App.css'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/auth/ProtectedRoute'
import About from './components/About'

function App() {

  return (
      <LogerContext>
    <BrowserRouter>
    {/* <Nav/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='login' element={<Login />} />
          {/*<Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} /> */}
          <Route path='dashboard' element={ <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute> } />
        </Routes>
    </BrowserRouter>
      </LogerContext>
  )
}

export default App
