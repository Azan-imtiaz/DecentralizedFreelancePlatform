import React, { useState, useCallback, useMemo } from "react";
import { FiUpload, FiX, FiCheck, FiAlertCircle } from "react-icons/fi";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
const ProjectCreationForm = () => {
const navigator=useNavigate();
    const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    budget: "",
    deadline: "",
    skills: [],
    files: []
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = ["Web Development", "Mobile App", "Design", "Marketing", "Other"];
  const skillOptions = ["React", "Node.js", "Python", "Design", "Marketing", "Other skills"];

  const validateField = useCallback((name, value) => {
    switch (name) {
      case "title":
        return value.length < 5 || value.length > 100
          ? "Title must be between 5 and 100 characters"
          : "";
      case "category":
        return !value ? "Category is required" : "";
      case "description":
        return value.length < 20 || value.length > 500
          ? "Description must be between 20 and 500 characters"
          : "";
      case "budget":
        return !value || parseFloat(value) <= 0
          ? "Budget must be a positive number"
          : "";
      case "deadline":
        return !value || new Date(value) <= new Date()
          ? "Deadline must be a future date"
          : "";
      case "skills":
        return value.length === 0 ? "Select at least one skill" : "";
      default:
        return "";
    }
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }, [validateField]);

  const handleSkillsChange = useCallback((skill) => {
    setFormData((prev) => {
      const updatedSkills = prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills: updatedSkills };
    });
  }, []);

  const handleFileChange = useCallback((e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(
      (file) =>
        file.size <= 10 * 1024 * 1024 &&
        [".pdf", ".docx", ".jpg", ".png"].some((ext) =>
          file.name.toLowerCase().endsWith(ext)
        )
    );
    setFormData((prev) => ({ ...prev, files: validFiles }));
  }, []);

  const isFormValid = useMemo(() => {
    const requiredFields = ["title", "category", "description", "budget", "deadline"];
    return (
      requiredFields.every((field) => formData[field]) &&
      formData.skills.length > 0 &&
      Object.keys(errors).every((key) => !errors[key])
    );
  }, [formData, errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#2980b9]">Project Basic Information</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3498db] focus:ring-[#3498db] sm:text-sm ${errors.title ? 'border-red-500' : ''}`}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3498db] focus:ring-[#3498db] sm:text-sm"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-red-600">{errors.category}</p>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#2980b9]">Project Details</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3498db] focus:ring-[#3498db] sm:text-sm"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Budget</label>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3498db] focus:ring-[#3498db] sm:text-sm"
              />
              {errors.budget && (
                <p className="mt-1 text-sm text-red-600">{errors.budget}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Deadline</label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
                min={format(new Date(), "yyyy-MM-dd")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3498db] focus:ring-[#3498db] sm:text-sm"
              />
              {errors.deadline && (
                <p className="mt-1 text-sm text-red-600">{errors.deadline}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Required Skills</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {skillOptions.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillsChange(skill)}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${formData.skills.includes(skill) ? 'bg-[#3498db] text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
              {errors.skills && (
                <p className="mt-1 text-sm text-red-600">{errors.skills}</p>
              )}
            </div>
          </div>

          {/* File Attachments */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#2980b9]">File Attachments</h2>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#3498db] hover:text-[#2980b9]">
                    <span>Upload files</span>
                    <input
                      id="file-upload"
                      name="files"
                      type="file"
                      multiple
                      accept=".pdf,.docx,.jpg,.png"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">PDF, DOCX, JPG, PNG up to 10MB</p>
              </div>
            </div>
            {formData.files.length > 0 && (
              <ul className="mt-4 space-y-2">
                {formData.files.map((file, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                    <FiCheck className="text-[#3498db]" />
                    <span>{file.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`px-6 py-2 rounded-md text-white font-medium ${isFormValid && !isSubmitting ? 'bg-[#3498db] hover:bg-[#2980b9]' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              {isSubmitting ? "Submitting..." : "Create Project"}
            </button>
          </div>
        </form>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
              <div className="flex items-center justify-center text-[#3498db] mb-4">
                <FiCheck className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-medium text-center mb-4">Project Created Successfully!</h3>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => {
                    setFormData({
                        title: "",
                        category: "",
                        description: "",
                        budget: "",
                        deadline: "",
                        skills: [],
                        files: []
                      });
                    setShowSuccess(false);
                    navigator("/createPost");
                    
                  }}
                  className="px-4 py-2 bg-[#3498db] text-white rounded-md hover:bg-[#2980b9]"
                >
                  Create Another
                </button>
                <button
                  onClick={() => { setShowSuccess(false);   navigator("/"); }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCreationForm;
