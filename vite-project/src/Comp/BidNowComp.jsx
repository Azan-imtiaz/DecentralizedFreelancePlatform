import React, { useState, useRef, useEffect } from "react";
import { FiUpload, FiX, FiCheck, FiInfo } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const BidNowComp = () => {
  const [formData, setFormData] = useState({
    bidAmount: "",
    durationValue: "",
    durationType: "days",
    description: "",
    files: []
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.bidAmount || parseFloat(formData.bidAmount) <= 0) {
      newErrors.bidAmount = "Bid amount must be a positive number";
    }

    if (!formData.durationValue || 
        parseInt(formData.durationValue) <= 0 || 
        (formData.durationType === "days" && parseInt(formData.durationValue) > 180)) {
      newErrors.duration = "Please provide a valid project duration";
    }

    if (formData.description.length < 50 || formData.description.length > 1000) {
      newErrors.description = "Description must be between 50-1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    const validFiles = uploadedFiles.filter(file => {
      const validTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png"];
      const validSize = file.size <= 10 * 1024 * 1024; // 10MB
      return validTypes.includes(file.type) && validSize;
    });

    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...validFiles]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 5000);
    }
  };

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit Your Project Bid</h1>
          <p className="text-gray-600 mb-8">Please provide detailed information about your bid proposal</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="bidAmount" className="block text-sm font-medium text-gray-700">Bid Amount</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  id="bidAmount"
                  min="0"
                  step="0.01"
                  value={formData.bidAmount}
                  onChange={(e) => setFormData(prev => ({ ...prev, bidAmount: e.target.value }))}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter your proposed bid amount"
                  aria-describedby="bid-amount-error"
                />
              </div>
              {errors.bidAmount && (
                <p className="mt-2 text-sm text-red-600" id="bid-amount-error">{errors.bidAmount}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="durationValue" className="block text-sm font-medium text-gray-700">Duration</label>
                <input
                  type="number"
                  id="durationValue"
                  min="1"
                  max="180"
                  value={formData.durationValue}
                  onChange={(e) => setFormData(prev => ({ ...prev, durationValue: e.target.value }))}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="durationType" className="block text-sm font-medium text-gray-700">Duration Type</label>
                <select
                  id="durationType"
                  value={formData.durationType}
                  onChange={(e) => setFormData(prev => ({ ...prev, durationType: e.target.value }))}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="days">Days</option>
                  <option value="weeks">Weeks</option>
                </select>
              </div>
            </div>
            {errors.duration && (
              <p className="mt-2 text-sm text-red-600">{errors.duration}</p>
            )}

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Bid Description
              </label>
              <textarea
                id="description"
                rows="4"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Describe your approach, methodology, and expertise"
              />
              <p className="mt-2 text-sm text-gray-500">
                {formData.description.length}/1000 characters
              </p>
              {errors.description && (
                <p className="mt-2 text-sm text-red-600">{errors.description}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Attachments</label>
              <div
                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                onDrop={(e) => {
                  e.preventDefault();
                  handleFileUpload({ target: { files: e.dataTransfer.files } });
                }}
                onDragOver={(e) => e.preventDefault()}
              >
                <div className="space-y-1 text-center">
                  <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload files</span>
                      <input
                        id="file-upload"
                        ref={fileInputRef}
                        type="file"
                        className="sr-only"
                        multiple
                        accept=".pdf,.docx,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, DOCX, JPG, PNG up to 10MB
                  </p>
                </div>
              </div>

              {formData.files.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {formData.files.map((file, index) => (
                    <li key={index} className="flex items-center justify-between py-2 px-4 bg-gray-50 rounded-md">
                      <span className="text-sm text-gray-700">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FiX className="h-5 w-5" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  "Place Bid"
                )}
              </button>
            </div>
          </form>
        </div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 overflow-y-auto"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                  <div>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <FiCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Bid Added Successfully!
                      </h3>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 space-y-2">
                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        setFormData({
                          bidAmount: "",
                          durationValue: "",
                          durationType: "days",
                          description: "",
                          files: []
                        });
                      }}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      Submit Another Bid
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      View Project Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BidNowComp;