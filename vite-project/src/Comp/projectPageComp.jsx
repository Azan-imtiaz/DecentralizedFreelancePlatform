import React, { useState, useEffect } from "react";
import { FiSearch, FiFilter, FiPlus } from "react-icons/fi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { format } from "date-fns";
import Select from "react-select";
import DatePicker from "react-datepicker";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [budgetRange, setBudgetRange] = useState([0, 10000]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [deadlineDate, setDeadlineDate] = useState(null);
  const [sortBy, setSortBy] = useState({ value: "recent", label: "Most Recent" });
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const dummyProjects = [
    {
      id: 1,
      title: "E-commerce Website Development",
      description: "Looking for an experienced developer to build a full-featured e-commerce platform",
      budget: 5000,
      deadline: new Date(2024, 5, 15),
      skills: ["React", "Node.js", "MongoDB"],
      category: "Web Development"
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      description: "Need a creative UI designer for an innovative mobile application",
      budget: 3000,
      deadline: new Date(2024, 4, 20),
      skills: ["UI/UX", "Figma", "Mobile Design"],
      category: "Design"
    },
    // Add more dummy projects as needed
  ];

  const categories = [
    { value: "web", label: "Web Development" },
    { value: "mobile", label: "Mobile Development" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" }
  ];

  const skillOptions = [
    { value: "react", label: "React" },
    { value: "node", label: "Node.js" },
    { value: "python", label: "Python" },
    { value: "design", label: "UI/UX Design" }
  ];

  const sortOptions = [
    { value: "recent", label: "Most Recent" },
    { value: "budget", label: "Highest Budget" }
  ];

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      setProjects(dummyProjects);
      setLoading(false);
    }, 1000);
  }, []);

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-green-600 font-semibold">${project.budget}</div>
        <div className="text-gray-500 text-sm">
          Due: {format(project.deadline, "MMM dd, yyyy")}
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Bid Now
        </button>
        <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors duration-300">
          Show Bids
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="relative w-full md:w-2/3 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search projects by keywords"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300"
            onClick={() => {}}
          >
            <FiPlus /> Create Project
          </button>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button
              className="md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FiFilter />
            </button>
          </div>
          <div className={`${showFilters ? "block" : "hidden"} md:block`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <Slider
                  range
                  min={0}
                  max={10000}
                  value={budgetRange}
                  onChange={setBudgetRange}
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>${budgetRange[0]}</span>
                  <span>${budgetRange[1]}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <Select
                  options={categories}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  placeholder="Select category"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills
                </label>
                <Select
                  options={skillOptions}
                  value={selectedSkills}
                  onChange={setSelectedSkills}
                  isMulti
                  placeholder="Select skills"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deadline
                </label>
                <DatePicker
                  selected={deadlineDate}
                  onChange={setDeadlineDate}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholderText="Select deadline"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <Select
                options={sortOptions}
                value={sortBy}
                onChange={setSortBy}
                className="w-48"
              />
              <button
                className="text-blue-600 hover:text-blue-700"
                onClick={() => {
                  setBudgetRange([0, 10000]);
                  setSelectedCategory(null);
                  setSelectedSkills([]);
                  setDeadlineDate(null);
                }}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-12">Loading projects...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button
            className="p-2 rounded-md hover:bg-gray-100"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <BsArrowLeft />
          </button>
          <div className="flex gap-1">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 rounded-md ${currentPage === page ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            className="p-2 rounded-md hover:bg-gray-100"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === 3}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;