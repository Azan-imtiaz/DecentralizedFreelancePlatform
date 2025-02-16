import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPlus, FiMinus } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const CustomerSupport= () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    category: "",
    description: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  const faqData = [
    {
      title: "Account Issues",
      content: "Having trouble with your account? Check our authentication guide or reset your password."
    },
    {
      title: "Billing Inquiries",
      content: "Find information about payments, invoices, and subscription management."
    },
    {
      title: "Technical Support",
      content: "Get help with technical issues, system requirements, and troubleshooting."
    },
    {
      title: "Order Tracking",
      content: "Track your order status and get shipping updates in real-time."
    },
    {
      title: "Return Policies",
      content: "Learn about our return process, eligibility criteria, and refund timelines."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setTicketNumber(`TKT${Math.random().toString(36).substr(2, 9)}`);
    setSubmitted(true);
  };

  const statusStages = ["Submitted", "Under Review", "In Progress", "Resolved"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">
          How can we assist you today?
        </h1>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full p-4 flex justify-between items-center bg-white hover:bg-gray-50"
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                >
                  <span className="font-medium text-gray-700">{faq.title}</span>
                  {activeAccordion === index ? (
                    <FiMinus className="text-blue-600" />
                  ) : (
                    <FiPlus className="text-blue-600" />
                  )}
                </button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 bg-gray-50">{faq.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:support@example.com"
            className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition-shadow"
          >
            <FiMail className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold">Email Support</h3>
            <p className="text-gray-600 text-center mt-2">Get assistance via email</p>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition-shadow"
          >
            <FaWhatsapp className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold">WhatsApp Support</h3>
            <p className="text-gray-600 text-center mt-2">Chat with us on WhatsApp</p>
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="">Select Category</option>
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing Issue</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Description"
                  rows="4"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Ticket
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <div className="text-green-500 text-xl mb-4">✓ Ticket Submitted</div>
                <p className="text-gray-700 mb-2">Ticket Number:</p>
                <p className="font-mono text-blue-600 font-bold">{ticketNumber}</p>
                <div className="mt-6">
                  {statusStages.map((stage, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-4 h-4 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      {index < statusStages.length - 1 && (
                        <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
                      )}
                    </div>
                  ))}
                  <div className="text-sm text-gray-600 mt-2">Current Status: Submitted</div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomerSupport;