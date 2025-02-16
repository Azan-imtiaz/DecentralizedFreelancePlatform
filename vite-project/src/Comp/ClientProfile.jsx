import { useState } from "react";
import { FaComments, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const ClientProfile = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const navigator=useNavigate();
  const dummyData = {
    user: {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    projects: [
      {
        id: 1,
        name: "E-commerce Website Redesign",
        bids: [
          { id: 1, freelancer: "John Smith", amount: "$2,500" },
          { id: 2, freelancer: "Maria Garcia", amount: "$2,800" }
        ]
      }
    ]
  };

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <img
                src={dummyData.user.image}
                alt="Profile"
                className="relative w-36 h-36 rounded-full object-cover transform transition duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d";
                }}
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{dummyData.user.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{dummyData.user.email}</p>
              <button
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                title="Start a conversation"
              >
                <FaComments className="mr-2" />
                Messages
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ongoing Projects</h2>
          <div className="space-y-4">
            {dummyData.projects.map((project) => (
              <div key={project.id} className="border rounded-lg overflow-hidden">
                <div className="flex items-center justify-between p-4 bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center px-4 py-2 text-sm text-purple-600 hover:text-purple-800 transition-colors duration-200"
                  >
                    {expandedProject === project.id ? (
                      <>
                        Hide Bids <FaChevronUp className="ml-2" />
                      </>
                    ) : (
                      <>
                        Show Bids <FaChevronDown className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
                {expandedProject === project.id && (
                  <div className="p-4 bg-gray-100 divide-y divide-gray-200">
                    {project.bids.map((bid) => (
                      <div key={bid.id} className="py-3 flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{bid.freelancer}</p>
                          <p className="text-sm text-gray-600">{bid.amount}</p>
                        </div>
                        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 transform hover:scale-105" onClick={()=>{navigator("/freelancebidpage")}} >
                          View Bid
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;