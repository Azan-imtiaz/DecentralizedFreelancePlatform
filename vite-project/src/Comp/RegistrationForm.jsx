import React, { useState } from "react";
import { FaUser, FaBriefcase, FaEye, FaEyeSlash, FaImage, FaGithub, FaLinkedin, FaTwitter, FaTimes } from "react-icons/fa";
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
  const [newSkill, setNewSkill] = useState("");

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    setStep(1);
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() !== "" && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()]
      });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const renderUserTypeSelection = () => (
    <div className="grid md:grid-cols-1 gap-8 p-6">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-8 bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300"
        onClick={() => handleUserTypeSelection("freelancer")}
      >
        <div className="flex flex-col items-center space-y-4">
          <FaUser className="w-16 h-16 text-blue-500" />
          <h3 className="text-2xl font-bold text-blue-600">Register as Freelancer</h3>
          <p className="text-gray-600 text-center">Showcase your skills and find exciting projects</p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-8 bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300"
        onClick={() => handleUserTypeSelection("client")}
      >
        <div className="flex flex-col items-center space-y-4">
          <FaBriefcase className="w-16 h-16 text-green-500" />
          <h3 className="text-2xl font-bold text-green-600">Register as Client</h3>
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
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
        <div className="mt-2 flex flex-wrap gap-2">
          {formData.skills.map((skill, index) => (
            <div key={index} className="flex items-center bg-blue-100 rounded-full px-3 py-1 transition-all duration-300 hover:bg-blue-200">
              <span className="text-sm text-blue-800">{skill}</span>
              <button
                type="button"
                onClick={() => handleRemoveSkill(skill)}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                <FaTimes className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
        <form onSubmit={handleAddSkill} className="mt-2 flex">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="flex-1 rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
            placeholder="Add a skill"
          />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
          >
            Add
          </button>
        </form>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Hourly Rate ($)</label>
        <input
          type="range"
          min="0"
          max="200"
          className="mt-1 block w-full accent-blue-600"
          value={formData.hourlyRate}
          onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })}
        />
        <span className="text-gray-600">${formData.hourlyRate}/hour</span>
      </div>
    </div>
  );

  const renderOptionalInfo = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-500 transition-all duration-300">
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
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
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
            placeholder="GitHub URL"
            value={formData.socialLinks.github}
            onChange={(e) => setFormData({ ...formData, socialLinks: { ...formData.socialLinks, github: e.target.value } })}
          />
        </div>
        <div className="flex items-center space-x-4">
          <FaLinkedin className="text-gray-400" />
          <input
            type="url"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
            placeholder="LinkedIn URL"
            value={formData.socialLinks.linkedin}
            onChange={(e) => setFormData({ ...formData, socialLinks: { ...formData.socialLinks, linkedin: e.target.value } })}
          />
        </div>
        <div className="flex items-center space-x-4">
          <FaTwitter className="text-gray-400" />
          <input
            type="url"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
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
        return renderOptionalInfo();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 hover:shadow-xl transition-all duration-300">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i <= step ? "bg-blue-600" : "bg-gray-200"} transition-all duration-300`}
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
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
              >
                {step === 3 ? "Submit" : "Next"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;