import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaUserCheck, FaMoneyCheckAlt, FaSearch, FaHandshake, FaTrophy } from "react-icons/fa";

const HowItWorks = () => {
  const [selectedSection, setSelectedSection] = useState("client");

  const clientSteps = [
    {
      icon: <FaProjectDiagram className="w-8 h-8 text-indigo-600" />,
      title: "Post a Project",
      description: "Create detailed project requirements and set your budget",
      bgColor: "bg-white"
    },
    {
      icon: <FaUserCheck className="w-8 h-8 text-indigo-600" />,
      title: "Select a Freelancer",
      description: "Choose from qualified professionals who match your needs",
      bgColor: "bg-white"
    },
    {
      icon: <FaMoneyCheckAlt className="w-8 h-8 text-indigo-600" />,
      title: "Approve & Pay",
      description: "Review milestones and process secure payments",
      bgColor: "bg-white"
    }
  ];

  const freelancerSteps = [
    {
      icon: <FaSearch className="w-8 h-8 text-purple-600" />,
      title: "Browse Projects",
      description: "Find projects that match your skills and interests",
      bgColor: "bg-white"
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-purple-600" />,
      title: "Place a Bid",
      description: "Submit your proposal and timeline for the project",
      bgColor: "bg-white"
    },
    {
      icon: <FaTrophy className="w-8 h-8 text-purple-600" />,
      title: "Complete & Earn",
      description: "Deliver quality work and receive payment",
      bgColor: "bg-white"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="flex justify-center space-x-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full shadow-md transition-all duration-300 ${
                selectedSection === "client"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setSelectedSection("client")}
            >
              For Clients
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full shadow-md transition-all duration-300 ${
                selectedSection === "freelancer"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setSelectedSection("freelancer")}
            >
              For Freelancers
            </motion.button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
          {(selectedSection === "client" ? clientSteps : freelancerSteps).map(
            (step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`rounded-xl shadow-lg overflow-hidden ${step.bgColor} hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto w-full`}
              >
                <div className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-4 flex justify-center"
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;