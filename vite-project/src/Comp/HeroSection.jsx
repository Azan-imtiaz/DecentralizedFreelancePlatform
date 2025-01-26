import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1A4B84] via-[#2DBCB0] to-[#7B4AFF]">
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 2}s infinite`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Empowering Freelancers Through Decentralization
            </h1>
            <p className="text-xl text-gray-100 md:pr-12">
              Eliminate middlemen and ensure secure, direct connections between freelancers and clients through blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="px-8 py-4 bg-gradient-to-r from-[#7B4AFF] to-[#2DBCB0] text-white rounded-xl font-semibold flex items-center justify-center gap-2 transform transition-all hover:shadow-lg"
              >
                Get Started
                <FiArrowRight className="text-xl" />
              </motion.button>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#1A4B84] transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a"
                alt="Blockchain Network Visualization"
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1639322537228-f710d846310a";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A4B84] via-transparent opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;