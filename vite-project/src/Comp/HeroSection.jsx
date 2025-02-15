import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaEthereum } from "react-icons/fa";
import { BiLock } from "react-icons/bi";
import { IoGlobeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigator=useNavigate();
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#1A3B5C] to-[#5A3B8C]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300}px`,
                height: `${Math.random() * 300}px`,
                border: "1px solid rgba(255,255,255,0.2)",
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
            Revolutionizing Freelancing
            <span className="block text-[#4A90E2]">through Blockchain</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Experience the future of work with our decentralized platform. Secure transactions,
            fair compensation, and a revolutionary NFT-based reputation system.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/10 rounded-xl backdrop-blur-lg"
            >
              <FaEthereum className="w-12 h-12 text-[#4A90E2] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Decentralization</h3>
              <p className="text-gray-300">Powered by smart contracts for transparent operations</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/10 rounded-xl backdrop-blur-lg"
            >
              <BiLock className="w-12 h-12 text-[#9C27B0] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Secure Earnings</h3>
              <p className="text-gray-300">Guaranteed payments through blockchain technology</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/10 rounded-xl backdrop-blur-lg"
            >
              <IoGlobeOutline className="w-12 h-12 text-[#4A90E2] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Global Access</h3>
              <p className="text-gray-300">Connect with clients worldwide seamlessly</p>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#4A90E2] to-[#9C27B0] text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-opacity-50"
         onClick={()=> navigator("/RegisterPage")}
         >
            Join the Decentralized Workforce
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;



// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FiArrowRight } from "react-icons/fi";

// const HeroSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 1 } }
//   };

//   const buttonVariants = {
//     hover: { scale: 1.05, transition: { duration: 0.2 } }
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1A4B84] via-[#2DBCB0] to-[#7B4AFF]">
//       <div className="absolute inset-0 opacity-20">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-white rounded-full"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `pulse ${2 + Math.random() * 2}s infinite`
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-6 py-16 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
//           <motion.div
//             initial="hidden"
//             animate={isVisible ? "visible" : "hidden"}
//             variants={containerVariants}
//             className="space-y-8"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//               Empowering Freelancers Through Decentralization
//             </h1>
//             <p className="text-xl text-gray-100 md:pr-12">
//               Eliminate middlemen and ensure secure, direct connections between freelancers and clients through blockchain technology.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <motion.button
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 className="px-8 py-4 bg-gradient-to-r from-[#7B4AFF] to-[#2DBCB0] text-white rounded-xl font-semibold flex items-center justify-center gap-2 transform transition-all hover:shadow-lg"
//               >
//                 Get Started
//                 <FiArrowRight className="text-xl" />
//               </motion.button>
//               <motion.button
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#1A4B84] transition-all"
//               >
//                 Learn More
//               </motion.button>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="relative"
//           >
//             <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1639322537228-f710d846310a"
//                 alt="Blockchain Network Visualization"
//                 className="w-full h-full object-cover rounded-2xl"
//                 onError={(e) => {
//                   e.target.src = "https://images.unsplash.com/photo-1639322537228-f710d846310a";
//                 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1A4B84] via-transparent opacity-60"></div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes pulse {
//           0% { transform: scale(0.8); opacity: 0.5; }
//           50% { transform: scale(1.2); opacity: 1; }
//           100% { transform: scale(0.8); opacity: 0.5; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSection;