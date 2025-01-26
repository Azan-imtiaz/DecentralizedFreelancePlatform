import React, { useState } from "react";
import { FaUser, FaBriefcase, FaEye, FaEyeSlash, FaWallet, FaImage, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const RegistrationForm = () => {
  const [step, setStep] = useState(0);
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    skills: [],
    hourlyRate: 0,
    availability: [],
    walletAddress: "",
    bio: "",
    socialLinks: {
      github: "",
      linkedin: "",
      twitter: ""
    },
    projectPreferences: [],
    budgetRange: [0, 1000]
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    setStep(1);
  };

  const renderUserTypeSelection = () => (
    <div className="grid md:grid-cols-2 gap-8 p-6">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-8 bg-white rounded-xl shadow-lg cursor-pointer"
        onClick={() => handleUserTypeSelection("freelancer")}
      >
        <div className="flex flex-col items-center space-y-4">
          <FaUser className="w-16 h-16 text-blue-500" />
          <h3 className="text-2xl font-bold">Register as Freelancer</h3>
          <p className="text-gray-600 text-center">Showcase your skills and find exciting projects</p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-8 bg-white rounded-xl shadow-lg cursor-pointer"
        onClick={() => handleUserTypeSelection("client")}
      >
        <div className="flex flex-col items-center space-y-4">
          <FaBriefcase className="w-16 h-16 text-green-500" />
          <h3 className="text-2xl font-bold">Register as Client</h3>
          <p className="text-gray-600 text-center">Find talented freelancers for your projects</p>
        </div>
      </motion.div>
    </div>
  );

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
          </button>
        </div>
      </div>
    </div>
  );

  const renderFreelancerDetails = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Skills</label>
        <select
          multiple
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: Array.from(e.target.selectedOptions, option => option.value) })}
        >
          <option value="programming">Programming</option>
          <option value="design">Design</option>
          <option value="writing">Writing</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Hourly Rate ($)</label>
        <input
          type="range"
          min="0"
          max="200"
          className="mt-1 block w-full"
          value={formData.hourlyRate}
          onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })}
        />
        <span className="text-gray-600">${formData.hourlyRate}/hour</span>
      </div>
    </div>
  );

  const renderWalletConnection = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Wallet Address</label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
            <FaWallet />
          </span>
          <input
            type="text"
            className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={formData.walletAddress}
            onChange={(e) => setFormData({ ...formData, walletAddress: e.target.value })}
          />
        </div>
      </div>
    </div>
  );

  const renderOptionalInfo = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <FaImage className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                <span>Upload a file</span>
                <input type="file" className="sr-only" />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows="4"
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        ></textarea>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">Social Links</label>
        <div className="flex items-center space-x-4">
          <FaGithub className="text-gray-400" />
          <input
            type="url"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="GitHub URL"
            value={formData.socialLinks.github}
            onChange={(e) => setFormData({ ...formData, socialLinks: { ...formData.socialLinks, github: e.target.value } })}
          />
        </div>
        <div className="flex items-center space-x-4">
          <FaLinkedin className="text-gray-400" />
          <input
            type="url"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="LinkedIn URL"
            value={formData.socialLinks.linkedin}
            onChange={(e) => setFormData({ ...formData, socialLinks: { ...formData.socialLinks, linkedin: e.target.value } })}
          />
        </div>
        <div className="flex items-center space-x-4">
          <FaTwitter className="text-gray-400" />
          <input
            type="url"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Twitter URL"
            value={formData.socialLinks.twitter}
            onChange={(e) => setFormData({ ...formData, socialLinks: { ...formData.socialLinks, twitter: e.target.value } })}
          />
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return renderUserTypeSelection();
      case 1:
        return renderPersonalInfo();
      case 2:
        return userType === "freelancer" ? renderFreelancerDetails() : null;
      case 3:
        return renderWalletConnection();
      case 4:
        return renderOptionalInfo();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i <= step ? "bg-blue-600" : "bg-gray-200"}`}
                ></div>
              ))}
            </div>
          </div>

          {renderStepContent()}

          {step > 0 && (
            <div className="mt-6 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {step === 4 ? "Submit" : "Next"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;