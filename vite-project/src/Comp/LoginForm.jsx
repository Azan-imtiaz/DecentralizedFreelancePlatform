import React, { useState ,useContext} from "react";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom';
import MyContext from "../context/createContext";





const LoginPage = () => {
  const { user, login,logout } = useContext(MyContext);
  const navigator = useNavigate();
  const [role, setRole] = useState("freelancer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);


  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value) && value) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) && password.length >= 8 && isCaptchaVerified) {
      console.log("Form submitted", { email, password, role, rememberMe });
      login();
      navigator("/");
    }
  };

  const isFormValid = () => {
    return (
      validateEmail(email) &&
      password.length >= 8 &&
      isCaptchaVerified &&
      !emailError &&
      !passwordError
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Login Now</h2>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setRole("freelancer")}
            className={`px-6 py-2 rounded-full transition-all ${role === "freelancer" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Freelancer
          </button>
          <button
            onClick={() => setRole("client")}
            className={`px-6 py-2 rounded-full transition-all ${role === "client" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Client
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${emailError ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"}`}
              />
            </div>
            {emailError && (
              <p className="mt-1 text-sm text-red-500">{emailError}</p>
            )}
          </div>

          <div>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter password"
                className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 ${passwordError ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {passwordError && (
              <p className="mt-1 text-sm text-red-500">{passwordError}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-600">
              Forgot Password?
            </a>
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={(value) => setIsCaptchaVerified(!!value)}
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid()}
            className={`w-full py-3 rounded-lg text-white font-semibold transition-all ${isFormValid() ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}`}
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600" >
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold" onClick={()=>navigator("/RegisterPage")}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;