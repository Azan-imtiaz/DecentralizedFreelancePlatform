import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    skills: [],
  });

  // Add a skill when the user presses 'Enter'
  const addSkill = (skill) => {
    if (skill && formData.skills.length < 10) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
    }
  };

  // Remove a skill from the list
  const removeSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleSkillKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission on Enter
      addSkill(e.target.value);
      e.target.value = ""; // Clear input after adding skill
    }
  };

  return (
    <div className="space-y-6">
      <label className="block text-sm font-medium mb-2">Skills</label>
      <div className="flex flex-wrap gap-2 mb-4">
        {formData.skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-purple-500/30 px-3 py-1 rounded-full flex items-center gap-2"
          >
            {skill}
            <FaTimes
              className="cursor-pointer hover:text-red-400"
              onClick={() => removeSkill(skill)}
            />
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add a skill"
          className="flex-1 bg-gray-800/50 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 transition-all"
          onKeyPress={handleSkillKeyPress}
        />
      </div>
    </div>
  );
};

export default RegistrationForm;
