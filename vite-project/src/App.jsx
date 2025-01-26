import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './comp/registrationForm'
import NavBar from './Comp/Navbar'
import LoginPage from './Comp/LoginForm'
import HeroSection from './Comp/HeroSection'
function App() {
  
  return (
    <>
     <NavBar />
     <HeroSection />
     <RegistrationForm />
     <LoginPage />
      </>
  )
}

export default App
