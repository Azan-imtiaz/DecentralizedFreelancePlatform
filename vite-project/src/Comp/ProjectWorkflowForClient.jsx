import React, { useState } from "react";
import { FaStar, FaGithub, FaVideo } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const ProjectWorkflowForClient= () => {
    const   navigate=useNavigate();
    const [showCongrats, setShowCongrats] = useState(false);
    const [currentIteration, setCurrentIteration] = useState(1);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [ratings, setRatings] = useState({
    communication: 0,
    technical: 0,
    timeliness: 0,
    problemSolving: 0,
    overall: 0
  });
  const [remarks, setRemarks] = useState("");

  const projectData = {
    name: "E-Commerce Platform Redesign",
    duration: "3 months",
    budget: "$15,000",
    freelancer: "John Developer",
    endDate: "2024-03-31"
  };


  const iterationData = {
    1: {
      submitted: true,
      githubUrl: "https://github.com/project/repo",
      videoUrl: "https://drive.google.com/video",
      files: ["design.fig", "documentation.pdf"]
    },
    2: {
      submitted: true,
      githubUrl: "https://github.com/project/repo-v2",
      videoUrl: "https://drive.google.com/video-v2",
      files: ["updated-design.fig", "final-documentation.pdf"]
    },
    3: {
      submitted: true,
      githubUrl: "https://github.com/project/repo-final",
      videoUrl: "https://drive.google.com/video-final",
      files: ["production-ready.fig", "deployment-guide.pdf"]
    }
  };

  const PaymentModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full transform transition-all">
        <h3 className="text-xl font-bold mb-4">Payment Confirmation</h3>
        <p className="mb-6">Are you sure you want to proceed with the payment?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setShowPaymentModal(false)}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setShowPaymentModal(false);
              setCurrentIteration(prev => prev + 1);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );

  const RatingStars = ({ name, value, onChange }) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`cursor-pointer ${star <= value ? "text-yellow-400" : "text-gray-300"}`}
          onClick={() => onChange(name, star)}
        />
      ))}
    </div>
  );

  const handleRatingChange = (name, value) => {
    setRatings(prev => ({ ...prev, [name]: value }));
  };

  const isReviewComplete = () => {
    return Object.values(ratings).every(rating => rating > 0) && remarks.trim() !== "";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{projectData.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600">Duration</p>
              <p className="font-semibold">{projectData.duration}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Budget</p>
              <p className="font-semibold">{projectData.budget}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Freelancer</p>
              <p className="font-semibold">{projectData.freelancer}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">End Date</p>
              <p className="font-semibold">{projectData.endDate}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`flex-1 text-center ${step < currentIteration ? "text-green-600" : step === currentIteration ? "text-blue-600" : "text-gray-400"}`}
            >
              <div className="relative">
                <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${step < currentIteration ? "bg-green-600 text-white" : step === currentIteration ? "bg-blue-600 text-white" : "bg-gray-200"} shadow-lg transition-all duration-300`}>
                  {step < currentIteration ? "✓" : step}
                </div>
              </div>
              <p className="mt-2 font-medium">{step === 3 ? "Final Approval" : `Iteration ${step}`}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {[1, 2].includes(currentIteration) && (
            <div>
              <h2 className="text-2xl font-bold mb-6">{currentIteration === 1 ? "Initial Submission" : "Final Iteration"}</h2>
              <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <FaGithub className="text-2xl text-gray-700" />
                  <a href={iterationData[currentIteration].githubUrl} className="text-blue-600 hover:text-blue-800 font-medium">
                    View GitHub Repository
                  </a>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <FaVideo className="text-2xl text-gray-700" />
                  <a href={iterationData[currentIteration].videoUrl} className="text-blue-600 hover:text-blue-800 font-medium">
                    Watch Video Presentation
                  </a>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-3">
                    <IoMdCloudUpload className="text-2xl text-gray-700" />
                    <span className="font-medium text-gray-700">Uploaded Files</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {iterationData[currentIteration].files.map((file, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        {file}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4 mt-8 justify-end">
                  <button className="px-6 py-3 bg-white border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-50 font-medium transition-colors">
                    Request Changes
                  </button>
                  <button
                    onClick={() => setShowPaymentModal(true)}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors"
                  >
                    Approve & Proceed
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentIteration === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-6">Final Approval</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold mb-4">Submission Details</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <FaGithub className="text-2xl text-gray-700" />
                      <a href={iterationData[currentIteration].githubUrl} className="text-blue-600 hover:text-blue-800 font-medium">
                        View GitHub Repository
                      </a>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <FaVideo className="text-2xl text-gray-700" />
                      <a href={iterationData[currentIteration].videoUrl} className="text-blue-600 hover:text-blue-800 font-medium">
                        Watch Video Presentation
                      </a>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-4 mb-3">
                        <IoMdCloudUpload className="text-2xl text-gray-700" />
                        <span className="font-medium text-gray-700">Uploaded Files</span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {iterationData[currentIteration].files.map((file, index) => (
                          <span key={index} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                            {file}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Communication Skills</label>
                    <RatingStars
                      name="communication"
                      value={ratings.communication}
                      onChange={handleRatingChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Technical Expertise</label>
                    <RatingStars
                      name="technical"
                      value={ratings.technical}
                      onChange={handleRatingChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Timeliness</label>
                    <RatingStars
                      name="timeliness"
                      value={ratings.timeliness}
                      onChange={handleRatingChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Problem-Solving</label>
                    <RatingStars
                      name="problemSolving"
                      value={ratings.problemSolving}
                      onChange={handleRatingChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Overall Satisfaction</label>
                  <RatingStars
                    name="overall"
                    value={ratings.overall}
                    onChange={handleRatingChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Remarks</label>
                  <textarea
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    className="w-full p-4 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="4"
                    placeholder="Please provide your feedback about the project and freelancer..."
                  />
                </div>
                <button
  disabled={!isReviewComplete()}
  className={`w-full px-6 py-3 rounded-md ${
    isReviewComplete()
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  } transition-colors duration-200`}
  onClick={() => {
    setShowCongrats(true); // Show the congrats message
    const timer = setTimeout(() => {
      setShowCongrats(false);
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer); // Cleanup function to avoid memory leaks
  }}
>
  Submit Final Approval
</button>

              </div>
              {showCongrats && (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-500">Congratulations!</h1>
          <p className="text-lg text-gray-700">Your final approval is complete.</p>
        </div>
      )}
            </div>
          )}
        </div>
      </div>

      {showPaymentModal && <PaymentModal />}
    </div>
  );
};

export default ProjectWorkflowForClient;