import React, { useState } from "react";
import { FaStar, FaUser, FaEnvelope, FaMapMarkerAlt, FaClock, FaChartBar } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const  FreelancerPageComp= () => {
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    skills: [],
    availability: "all",
    rating: 0,
    hourlyRate: { min: 0, max: 200 }
  });

  const freelancers = [
    {
      id: 1,
      name: "John Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      skills: ["React", "Node.js", "TypeScript"],
      rating: 4.8,
      hourlyRate: 75,
      availability: "Full-time",
      location: "San Francisco, CA",
      portfolio: [
        {
          title: "E-commerce Platform",
          image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
          description: "Built a scalable e-commerce solution"
        }
      ],
      analytics: {
        responseTime: 2,
        completionRate: 95,
        totalEarnings: 150000,
        satisfaction: 4.9
      }
    },
    {
        id: 1,
        name: "John Developer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        skills: ["React", "Node.js", "TypeScript"],
        rating: 4.8,
        hourlyRate: 75,
        availability: "Full-time",
        location: "San Francisco, CA",
        portfolio: [
          {
            title: "E-commerce Platform",
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
            description: "Built a scalable e-commerce solution"
          }
        ],
        analytics: {
          responseTime: 2,
          completionRate: 95,
          totalEarnings: 150000,
          satisfaction: 4.9
        }
      },
      {
        id: 1,
        name: "John Developer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        skills: ["React", "Node.js", "TypeScript"],
        rating: 4.8,
        hourlyRate: 75,
        availability: "Full-time",
        location: "San Francisco, CA",
        portfolio: [
          {
            title: "E-commerce Platform",
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
            description: "Built a scalable e-commerce solution"
          }
        ],
        analytics: {
          responseTime: 2,
          completionRate: 95,
          totalEarnings: 150000,
          satisfaction: 4.9
        }
      }
      ,{
        id: 1,
        name: "John Developer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        skills: ["React", "Node.js", "TypeScript"],
        rating: 4.8,
        hourlyRate: 75,
        availability: "Full-time",
        location: "San Francisco, CA",
        portfolio: [
          {
            title: "E-commerce Platform",
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
            description: "Built a scalable e-commerce solution"
          }
        ],
        analytics: {
          responseTime: 2,
          completionRate: 95,
          totalEarnings: 150000,
          satisfaction: 4.9
        }
      }
      ,{
        id: 1,
        name: "John Developer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        skills: ["React", "Node.js", "TypeScript"],
        rating: 4.8,
        hourlyRate: 75,
        availability: "Full-time",
        location: "San Francisco, CA",
        portfolio: [
          {
            title: "E-commerce Platform",
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
            description: "Built a scalable e-commerce solution"
          }
        ],
        analytics: {
          responseTime: 2,
          completionRate: 95,
          totalEarnings: 150000,
          satisfaction: 4.9
        }
      }
      ,{
        id: 1,
        name: "John Developer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        skills: ["React", "Node.js", "TypeScript"],
        rating: 4.8,
        hourlyRate: 75,
        availability: "Full-time",
        location: "San Francisco, CA",
        portfolio: [
          {
            title: "E-commerce Platform",
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
            description: "Built a scalable e-commerce solution"
          }
        ],
        analytics: {
          responseTime: 2,
          completionRate: 95,
          totalEarnings: 150000,
          satisfaction: 4.9
        }
      }
  ];

  const FreelancerCard = ({ freelancer }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={freelancer.avatar}
            alt={freelancer.name}
            className="w-16 h-16 rounded-full object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d";
            }}
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{freelancer.name}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {freelancer.skills.map((skill) => (
              <span key={skill} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-4 h-4 ${i < Math.floor(freelancer.rating) ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <p className="text-lg font-bold mt-2">${freelancer.hourlyRate}/hr</p>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={() => {
            setSelectedFreelancer(freelancer);
            setShowModal(true);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Profile
        </button>
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
          Invite to Bid
        </button>
      </div>
    </div>
  );

  const ProfileModal = ({ freelancer, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-6">
            <img
              src={freelancer.avatar}
              alt={freelancer.name}
              className="w-24 h-24 rounded-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d";
              }}
            />
            <div>
              <h2 className="text-2xl font-bold">{freelancer.name}</h2>
              <div className="flex items-center space-x-2 mt-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>{freelancer.location}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <BsThreeDots className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
            <div className="grid grid-cols-2 gap-4">
              {freelancer.portfolio.map((project, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-gray-50">
                    <h4 className="font-semibold">{project.title}</h4>
                    <p className="text-sm text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Analytics</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span>Response Time</span>
                  <span className="font-semibold">{freelancer.analytics.responseTime}h</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(freelancer.analytics.responseTime / 24) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span>Completion Rate</span>
                  <span className="font-semibold">{freelancer.analytics.completionRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${freelancer.analytics.completionRate}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 bg-white p-6 rounded-lg shadow-lg h-fit">
            <h2 className="text-xl font-semibold mb-6">Filters</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills
                </label>
                <select
                  className="w-full border rounded-lg p-2"
                  onChange={(e) =>
                    setFilters({ ...filters, availability: e.target.value })
                  }
                >
                  <option value="all">All</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                </select>
                          </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <select
                  className="w-full border rounded-lg p-2"
                  onChange={(e) =>
                    setFilters({ ...filters, availability: e.target.value })
                  }
                >
                  <option value="all">All</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hourly Rate
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    className="w-full"
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        hourlyRate: { ...filters.hourlyRate, max: parseInt(e.target.value) }
                      })
                    }
                  />
                  <span>${filters.hourlyRate.max}</span>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="grid grid-cols-1 gap-6">
              {freelancers.map((freelancer) => (
                <FreelancerCard key={freelancer.id} freelancer={freelancer} />
              ))}
            </div>
          </main>
        </div>
      </div>

      {showModal && selectedFreelancer && (
        <ProfileModal
          freelancer={selectedFreelancer}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default FreelancerPageComp;