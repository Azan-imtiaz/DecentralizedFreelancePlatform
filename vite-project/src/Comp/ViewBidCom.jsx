import { useState } from "react";
import { FiClock, FiCalendar, FiDownload, FiCheck } from "react-icons/fi";
import { IoMdCheckmarkCircle } from "react-icons/io";

const FreelanceBidCard = () => {
const [showFullDescription, setShowFullDescription] = useState(false);
const [showAcceptModal, setShowAcceptModal] = useState(false);
const [showRejectModal, setShowRejectModal] = useState(false);
const [showRequestChangesModal, setShowRequestChangesModal] = useState(false);

const dummyData = {
freelancer: {
name: "Sarah Anderson",
title: "Senior UI/UX Designer",
avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
verified: true,
portfolio: "#"
},
bid: {
amount: "$2,500",
duration: "3 weeks",
startDate: "Oct 15, 2023",
description: "I specialize in creating intuitive user interfaces with a focus on user experience. My approach combines modern design principles with practical functionality. I have extensive experience in similar projects and can deliver high-quality results within the specified timeframe. I would leverage my expertise in UI/UX design to create a seamless and engaging user experience for your platform.",
attachments: [
{ name: "Project_Proposal.pdf", type: "pdf" }
]
}
};

const truncateText = (text, maxLength) => {
if (text.length <= maxLength) return text;
return text.substr(0, maxLength) + "...";
};

return (
<div className="max-w-4xl mx-auto p-4">
<div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
<div className="flex items-center space-x-4">
<img
src={dummyData.freelancer.avatar}
alt={[dummyData.freelancer.name]}
className="w-16 h-16 rounded-full object-cover"
loading="lazy"
/>
<div>
<div className="flex items-center space-x-2">
<a
href={dummyData.freelancer.portfolio}
className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition"
>
{[dummyData.freelancer.name]}
</a>
{dummyData.freelancer.verified && (
<IoMdCheckmarkCircle className="text-blue-500 text-xl" />
)}
</div>
<p className="text-gray-600">{dummyData.freelancer.title}</p>
</div>
</div>
    <div className="space-y-6 py-4 border-t border-b border-gray-100">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Bid Amount:</span>
          <span className="text-2xl font-bold text-green-600">
            {dummyData.bid.amount}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FiClock className="text-gray-400" />
          <span>{dummyData.bid.duration}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FiCalendar className="text-gray-400" />
          <span>Start: {dummyData.bid.startDate}</span>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-gray-700">
          {showFullDescription
            ? dummyData.bid.description
            : truncateText(dummyData.bid.description, 150)}
        </p>
        {dummyData.bid.description.length > 150 && (
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            {showFullDescription ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {dummyData.bid.attachments.map((file, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
        >
          <span className="text-sm text-gray-600">{file.name}</span>
          <button className="text-blue-600 hover:text-blue-700">
            <FiDownload />
          </button>
        </div>
      ))}
    </div>

    <div className="flex justify-end space-x-4 mt-6">
      <button
        onClick={() => setRejectModal(true)}
        className="px-6 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
      >
        Reject
      </button>
      <button
        onClick={() => setShowRequestChangesModal(true)}
        className="px-6 py-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition"
      >
        Request Changes
      </button>
      <button
        onClick={() => setShowAcceptModal(true)}
        className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition flex items-center space-x-2"
      >
        <FiCheck />
        <span>Accept Bid</span>
      </button>
    </div>
  </div>

  {showAcceptModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">Confirm Acceptance</h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to accept this bid? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setShowAcceptModal(false)}
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setShowAcceptModal(false);
              // Handle acceptance logic here
            }}
            className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )}

  {showRejectModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">Confirm Rejection</h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to reject this bid? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setShowRejectModal(false)}
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setShowRejectModal(false);
              // Handle rejection logic here
            }}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Confirm Rejection
          </button>
        </div>
      </div>
    </div>
  )}

  {showRequestChangesModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">Request Changes</h3>
        <textarea
          className="w-full p-3 border rounded-lg mb-4 h-32"
          placeholder="Describe the changes you would like the freelancer to make..."
        ></textarea>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setShowRequestChangesModal(false)}
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setShowRequestChangesModal(false);
              // Handle request changes logic here
            }}
            className="px-4 py-2 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700"
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  )}
</div>



);
};

export default FreelanceBidCard;