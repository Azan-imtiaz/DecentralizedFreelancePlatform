import { motion } from "framer-motion";
import { useState } from "react";
import CustomerSupport from "../Comp/CustomerSupport";
import RegistrationForm from "../comp/registrationForm";
import NavBar from "../Comp/Navbar";
import Login from "../Comp/LoginForm";
import HeroSection from "../Comp/HeroSection";
import DecentralizedFeatures from "../Comp/Features";
import HowItWorks from "../Comp/HowItWorks";
import Footer from "../Comp/Footer";

function LoginPage() {
  // Animation variants for scroll
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <NavBar />

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Login />
      </motion.div>


      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <DecentralizedFeatures />
      </motion.div>


      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <HowItWorks />
      </motion.div>


      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <CustomerSupport />
      </motion.div>


<Footer />


    </>
  );
}

export default LoginPage;