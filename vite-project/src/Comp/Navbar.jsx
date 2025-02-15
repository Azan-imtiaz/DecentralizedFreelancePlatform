import React, { useState, useEffect ,useContext} from "react";
import { FaWallet, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MyContext from "../context/createContext";

const NavBar = () => {
 const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, login,logout } = useContext(MyContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleWalletConnection = () => {
    if (!isWalletConnected) {
      setIsWalletConnected(true);
      setWalletAddress("0x1234...ABCD");
    } else {
      setIsWalletConnected(false);
      setWalletAddress("");
    }
  };

  const handleLogin = () => {
    // setIsLoggedIn(true);
    navigate("/login");
  };
  const handleRegisterClick = () => {
    console.log("Navigating to /RegisterPage");
    navigate("/RegisterPage");
  };
  
  const handleLogout = () => {
    navigate("/");
    // setIsLoggedIn(false);
    setShowProfileMenu(false);
    logout();
  };

  const truncateAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-gray-900 to-blue-900 backdrop-blur-lg bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
 <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent hover:from-teal-300 hover:to-blue-400 transition-all duration-500 cursor-pointer transform hover:scale-105 animate-pulse">
              TrustFreelance
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Home", "Projects", "Freelancers"].map((item) => (
                <button
                  key={item}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-700/30 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleWalletConnection}
              className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              <FaWallet className="mr-2" />
              {isWalletConnected
                ? truncateAddress(walletAddress)
                : "Connect Wallet"}
            </button>

            { user ? (
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white"
                >
                  <FaUserCircle className="h-6 w-6" />
                  <span>Profile</span>
                </button>
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  Login
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-600 text-white font-medium hover:bg-gray-700 transition-colors"
               onClick={handleRegisterClick}>
                  Register
                </button>
              </div>
            )}
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700/30 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      { user && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "Projects", "Freelancers"].map((item) => (
              <button
                key={item}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-blue-700/30 transition-all duration-300"
              >
                {item}
              </button>
            ))}
            <button
              onClick={handleWalletConnection}
              className="flex items-center w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              <FaWallet className="mr-2" />
              {isWalletConnected
                ? truncateAddress(walletAddress)
                : "Connect Wallet"}
            </button>
            {isOpen ? (
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-blue-700/30 rounded-md"
              >
                <FaUserCircle className="inline mr-2" />
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-blue-700/30 rounded-md"
                >
                  Login
               
                </button>
                 <button className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-blue-700/30 rounded-md"
               onClick={handleRegisterClick}
               >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;




// import React, { useState, useEffect } from "react";
// import { FaWallet, FaBars, FaTimes } from "react-icons/fa";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isWalletConnected, setIsWalletConnected] = useState(false);
//   const [walletAddress, setWalletAddress] = useState("");

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleWalletConnection = () => {
//     if (!isWalletConnected) {
//       setIsWalletConnected(true);
//       setWalletAddress("0x1234...ABCD");
//     } else {
//       setIsWalletConnected(false);
//       setWalletAddress("");
//     }
//   };

//   const truncateAddress = (address) => {
//     return `${address.slice(0, 6)}...${address.slice(-4)}`;
//   };

//   return (
//     <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-gray-900 to-blue-900 backdrop-blur-lg bg-opacity-80">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent hover:from-teal-300 hover:to-blue-400 transition-all duration-500 cursor-pointer transform hover:scale-105 animate-pulse">
//               TrustFreelance
//             </h1>
//           </div>

//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {["Home", "Projects", "Freelancers"].map((item) => (
//                 <button
//                   key={item}
//                   className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-700/30 relative group"
//                 >
//                   {item}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="hidden md:block">
//             <button
//               onClick={handleWalletConnection}
//               className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
//             >
//               <FaWallet className="mr-2" />
//               {isWalletConnected
//                 ? truncateAddress(walletAddress)
//                 : "Connect Wallet"}
//             </button>
//           </div>

//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700/30 focus:outline-none"
//             >
//               {isOpen ? (
//                 <FaTimes className="h-6 w-6" />
//               ) : (
//                 <FaBars className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-gray-900/95 backdrop-blur-lg">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {["Home", "Projects", "Freelancers"].map((item) => (
//               <button
//                 key={item}
//                 className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-blue-700/30 transition-all duration-300"
//               >
//                 {item}
//               </button>
//             ))}
//             <button
//               onClick={handleWalletConnection}
//               className="flex items-center w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
//             >
//               <FaWallet className="mr-2" />
//               {isWalletConnected
//                 ? truncateAddress(walletAddress)
//                 : "Connect Wallet"}
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;