import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './Components/Header'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
