import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaMoon, FaSun, FaDownload } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const FreelancerProfile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigator=useNavigate();

  const skills = {
    technical: [
      { name: "React", proficiency: 90 },
      { name: "Node.js", proficiency: 85 },
      { name: "TypeScript", proficiency: 80 }
    ],
    softSkills: [
      { name: "Communication", proficiency: 95 },
      { name: "Leadership", proficiency: 85 },
      { name: "Problem Solving", proficiency: 90 }
    ]
  };

  const ongoingProjects = [
    {
      name: "E-Commerce Platform",
      description: "Building a scalable online marketplace",
      progress: 75,
      startDate: "2024-01-15"
    },
    {
      name: "Mobile App Development",
      description: "Cross-platform fitness tracking application",
      progress: 60,
      startDate: "2024-02-01"
    }
  ];

  const completedProjects = [
    {
      title: "Social Media Dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      review: "Exceptional work and great communication!",
      ratings: {
        communication: 5,
        timeliness: 4.5,
        quality: 5,
        overall: 4.8
      }
    },
    {
      title: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      review: "Delivered beyond expectations!",
      ratings: {
        communication: 5,
        timeliness: 5,
        quality: 4.8,
        overall: 4.9
      }
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2">John Developer</h1>
              <p className="text-gray-500 dark:text-gray-400">john@developer.com</p>
              <div className="flex gap-4 mt-4">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600 transition-all">
                  <FaEnvelope /> Message
                </button>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                >
                  {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <FaGithub className="text-2xl cursor-pointer hover:text-blue-500 transition-all" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-500 transition-all" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-500 transition-all" />
            <FaDownload className="text-2xl cursor-pointer hover:text-blue-500 transition-all" />
          </div>
        </header>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Professional Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {skills.technical.map((skill) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-300"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <div className="space-y-4">
                {skills.softSkills.map((skill) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all duration-300"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ongoing Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ongoingProjects.map((project) => (
              <div key={project.name} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Started: {project.startDate}</span>
                  <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-all"
                  onClick={()=>{ navigator("/Projectworkflowforfreelancer") }}
                  >
                    View Project <FiExternalLink />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Completed Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Achievement Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedProjects.map((project) => (
              <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">"{project.review}"</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Communication</span>
                      <span>{project.ratings.communication}/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timeliness</span>
                      <span>{project.ratings.timeliness}/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quality</span>
                      <span>{project.ratings.quality}/5</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Overall</span>
                      <span>{project.ratings.overall}/5</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FreelancerProfile;