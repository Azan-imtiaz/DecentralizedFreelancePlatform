import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiUploadCloud, FiCheckCircle, FiLock, FiUnlock } from "react-icons/fi";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

const ProjectWorkFlowForFreelancerComp = () => {
const navigator=useNavigate();
    const [currentIteration, setCurrentIteration] = useState(1);
  const [submissions, setSubmissions] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFinalSuccess, setShowFinalSuccess] = useState(false);

  const projectData = {
    name: "E-Commerce Platform Redesign",
    duration: "3 months",
    budget: "$15,000",
    endDate: "2024-06-30",
    clientName: "Tech Solutions Inc."
  };

  const handleSubmit = async (iteration) => {
    setSubmissions({ ...submissions, [iteration]: true });
    
    if (iteration < 3) {
      setShowSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        setShowSuccess(false);
        setCurrentIteration(iteration + 1);
      }, 5000);
    } else {
      setShowFinalSuccess(true);
      confetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 }
      });
    }
  };

  const IterationCard = ({ iteration, locked }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-6 rounded-lg shadow-lg ${locked ? "bg-gray-100" : "bg-white"} relative`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Iteration {iteration}</h3>
        {locked ? (
          <FiLock className="text-gray-400" />
        ) : (
          <FiUnlock className="text-blue-500" />
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2 p-3 border rounded">
          <FiGithub className="text-gray-600" />
          <input
            type="text"
            placeholder="GitHub Repository URL"
            className="w-full outline-none"
            disabled={locked}
          />
        </div>

        <div className="flex items-center space-x-2 p-3 border rounded">
          <FiUploadCloud className="text-gray-600" />
          <input
            type="text"
            placeholder="Google Drive Video URL"
            className="w-full outline-none"
            disabled={locked}
          />
        </div>

        <div className="border-2 border-dashed rounded-lg p-4 text-center">
          <input
            type="file"
            multiple
            className="hidden"
            id={`files-${iteration}`}
            disabled={locked}
          />
          <label
            htmlFor={`files-${iteration}`}
            className="cursor-pointer text-blue-500"
          >
            Upload Additional Files
          </label>
        </div>

        <button
          onClick={() => handleSubmit(iteration)}
          disabled={locked || submissions[iteration]}
          className={`w-full py-3 rounded-lg transition-all transform hover:scale-105 ${locked || submissions[iteration] ? "bg-gray-300" : "bg-blue-500 hover:bg-blue-600"} text-white font-semibold`}
        >
          {submissions[iteration] ? (
            <span className="flex items-center justify-center">
              <FiCheckCircle className="mr-2" /> Submitted
            </span>
          ) : (
            "Submit Work"
          )}
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white mb-8">
          <h1 className="text-3xl font-bold mb-4">{projectData.name}</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-blue-100">Duration</p>
              <p className="font-semibold">{projectData.duration}</p>
            </div>
            <div>
              <p className="text-blue-100">Budget</p>
              <p className="font-semibold">{projectData.budget}</p>
            </div>
            <div>
              <p className="text-blue-100">End Date</p>
              <p className="font-semibold">{projectData.endDate}</p>
            </div>
            <div>
              <p className="text-blue-100">Client</p>
              <p className="font-semibold">{projectData.clientName}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {[1, 2, 3].map((iteration) => (
            <IterationCard
              key={iteration}
              iteration={iteration}
              locked={iteration > currentIteration}
            />
          ))}
        </div>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-lg shadow-lg"
            >
              Congratulations! The client has approved your work, and the next iteration is now unlocked.
            </motion.div>
          )}

          {showFinalSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="bg-white p-8 rounded-xl text-center max-w-lg"
              >
                <h2 className="text-2xl font-bold mb-4">🎉 Project Complete! 🎉</h2>
                <p className="text-gray-600 mb-4">
                  Congratulations! The full project payment has been successfully transferred to your account, and an NFT has been added to your profile as a recognition of your successful completion.
                </p>
                <button
                  onClick={() => { setShowFinalSuccess(false); navigator("/"); }}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
               
               >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectWorkFlowForFreelancerComp;