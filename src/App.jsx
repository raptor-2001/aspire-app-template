import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sources from './pages/Sources'

import Profile from './pages/Profile'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import AddJobs from './pages/AddJobs'

import './App.css'
import RequireAuth from './components/RequireAuth'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ResetPassword from './components/ResetPassword'


const App = () => {

  return (
    <div>
      
        <Navbar/>
    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sources" element={<Sources/>} />
      
          <Route 
            path="/profile" 
            element={
            <RequireAuth>
              <Profile/>
            </RequireAuth>
            } 
          />
          <Route path="/login" element={<Login/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/singup" element={<SignUp/>} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/addjobs" element={
            <RequireAuth>
            <AddJobs/>
            </RequireAuth>
          
          } />
        </Routes>

    </div>
  )
}

export default App
