import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './comp/registrationForm'
import NavBar from './Comp/Navbar'
function App() {
  
  return (
    <>
     <NavBar />
     <RegistrationForm />
      </>
  )
}

export default App
