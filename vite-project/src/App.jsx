import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import CreateProjectPostPage from "./Pages/CreateProjectPostPage";
import ProjectsPage from "./Pages/ProjectsPage";
import FreelancerPage from "./Pages/FreelancerPage"
import ClientProfilePage from "./Pages/ClientProfilePage";
import FreelanceBidPage from "./Pages/FreelanceBidPage";
import ProjectWorkflowForClientPage from "./Pages/ProjectWorkflowForClientPage";
import FreelancerPersonalProfilePage from "./Pages/FreelancerPersonalProfilePage";
import ProjectWorkflowForFreelancerPage from "./Pages/ProjectWorkflowForFreelancerPage";
import BidNowPage from "./Pages/BidNowPage";

function App() {
  

  return (
    <>

  <Router>

  <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/createPost" element={<CreateProjectPostPage />} />
        <Route path="/freelancers" element={<FreelancerPage />} />
        <Route path="/clientProfile" element={<ClientProfilePage />} />
        <Route path="/freelancebidpage" element={<FreelanceBidPage />} />
        <Route path="/ProjectWorkflowForClientPage" element={<ProjectWorkflowForClientPage />} />
        <Route path="/freelancerProfile" element={<FreelancerPersonalProfilePage />} />
        <Route path="/Projectworkflowforfreelancer" element={<ProjectWorkflowForFreelancerPage />} />
        <Route path="/bidbowpage" element={<BidNowPage />} />
  
  </Routes>


  </Router>

    </>
  );
}

export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import RegistrationForm from './comp/registrationForm'
// import NavBar from './Comp/Navbar'
// import LoginPage from './Comp/LoginForm'
// import HeroSection from './Comp/HeroSection'
// import DecentralizedFeatures from './Comp/Features'
// function App() {
  
//   return (
//     <>
//      <NavBar />
//      <HeroSection />
//      <RegistrationForm />
//      <DecentralizedFeatures />
//      <LoginPage />
//       </>
//   )
// }

// export default App
