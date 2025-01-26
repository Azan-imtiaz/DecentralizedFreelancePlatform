import React from "react";
import { motion } from "framer-motion";
import { FaBitcoin, FaSearch, FaClipboardList } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const FeatureSection = () => {
  const features = [
    {
      title: "NFT-Based Reputation",
      description: "Immutable records of work history",
      icon: <MdSecurity className="w-8 h-8" />,
      color: "from-[#00F0FF] to-[#0080FF]",
      delay: 0.1
    },
    {
      title: "Smart Contract Payments",
      description: "Secure and milestone-based escrow",
      icon: <FaBitcoin className="w-8 h-8" />,
      color: "from-[#8A4FFF] to-[#6A1FFF]",
      delay: 0.3
    },
    {
      title: "Project Listings and Bidding",
      description: "Competitive and fair opportunities",
      icon: <FaClipboardList className="w-8 h-8" />,
      color: "from-[#40E0D0] to-[#00B4D8]",
      delay: 0.5
    },
    {
      title: "Advanced Search Filters",
      description: "Match freelancers and projects efficiently",
      icon: <FaSearch className="w-8 h-8" />,
      color: "from-[#9D4EDD] to-[#7B2CBF]",
      delay: 0.7
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A1A] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A1A] via-[#1A1A2F] to-[#0A0A1A] opacity-50" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-7xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Future of Work Platform
        </h2>
        <p className="text-xl text-gray-300">
          Experience the next generation of decentralized freelancing
        </p>
      </motion.div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: feature.delay }}
            whileHover={  { scale: 1.05 }  }
            className="relative group z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                 style={{
                   background: `linear-gradient(to right, ${feature.color.split(" ")[1]}, ${feature.color.split(" ")[3]})`
                 }}
            />
            <div className="relative bg-[#1A1A2F] p-8 rounded-xl border border-opacity-20 border-white backdrop-blur-xl">
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-r ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
              
              <div className="absolute -inset-px bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"
                   style={{
                     background: `linear-gradient(to right, ${feature.color.split(" ")[1]}, ${feature.color.split(" ")[3]})`
                   }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0A0A1A] opacity-50" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#0A0A1A] to-transparent opacity-30" />
      </div>
    </div>
  );
};

export default FeatureSection;


// import React from "react";
// import { BiCertification, BiLockAlt, BiClipboard, BiSearch } from "react-icons/bi";
// import { motion } from "framer-motion";

// const FeaturesSection = () => {
//   const features = [
//     {
//       id: 1,
//       title: "NFT-Based Reputation",
//       description: "Immutable records of work history",
//       icon: <BiCertification className="w-12 h-12" />,
//       position: "col-span-1",
//     },
//     {
//       id: 2,
//       title: "Smart Contract Payments",
//       description: "Secure and milestone-based escrow",
//       icon: <BiLockAlt className="w-12 h-12" />,
//       position: "col-span-1",
//     },
//     {
//       id: 3,
//       title: "Project Listings and Bidding",
//       description: "Competitive and fair opportunities",
//       icon: <BiClipboard className="w-12 h-12" />,
//       position: "col-span-1",
//     },
//     {
//       id: 4,
//       title: "Advanced Search Filters",
//       description: "Match freelancers and projects efficiently",
//       icon: <BiSearch className="w-12 h-12" />,
//       position: "col-span-1",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#0A192F] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#0A192F] to-[#8A4FFF] opacity-50"></div>
//         <div className="absolute inset-0 bg-[#0A192F] opacity-10">
//           <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
//             <g fill="none" fillRule="evenodd">
//               <g fill="#9C92AC" fillOpacity="0.05">
//                 <path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" />
//               </g>
//             </g>
//           </svg>
//         </div>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-[#E6E6E6] sm:text-5xl">
//             Future-Ready Features
//           </h2>
//           <p className="mt-4 text-xl text-gray-400">
//             Experience the next generation of freelancing platform
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature) => (
//             <motion.div
//               key={feature.id}
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: feature.id * 0.1 }}
//               className="relative p-6 bg-gradient-to-br from-[#0A192F] to-[#1A2942] rounded-xl border border-[#00D8FF]/20 hover:border-[#00D8FF]/50 transition-all duration-300 group"
//             >
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00D8FF] to-[#8A4FFF] rounded-xl opacity-0 group-hover:opacity-10 transition duration-300"></div>
//               <div className="relative">
//                 <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00D8FF] to-[#8A4FFF] rounded-full p-3 mb-4 text-white shadow-lg shadow-[#00D8FF]/20">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-[#E6E6E6] mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-400">{feature.description}</p>
//               </div>

//               <div className="absolute -bottom-px left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00D8FF] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturesSection;