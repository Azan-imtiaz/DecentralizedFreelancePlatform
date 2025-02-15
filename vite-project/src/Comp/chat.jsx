import { useState, useEffect, useRef, useCallback, memo } from "react";
import { BsEmojiSmile, BsPaperclip, BsSend } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";

const ContactItem = memo(({ contact, isSelected, onClick }) => (
  <div
    onClick={() => onClick(contact)}
    className={`flex items-center p-4 cursor-pointer transition-all hover:bg-gray-50 ${isSelected ? "bg-blue-50" : ""}`}
  >
    <img
      src={contact.avatar}
      alt={contact.name}
      className="w-12 h-12 rounded-full object-cover"
      loading="lazy"
    />
    <div className="ml-4 flex-1">
      <h3 className="font-semibold text-gray-800">{contact.name}</h3>
      <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
    </div>
  </div>
));

const MessageBubble = memo(({ message, isOwn }) => (
  <div className={`flex ${isOwn ? "justify-end" : "justify-start"} mb-4`}>
    <div
      className={`max-w-[70%] p-3 rounded-lg ${isOwn ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"}`}
    >
      <p>{message.text}</p>
      <span className="text-xs mt-1 block opacity-70">
        {new Date(message.timestamp).toLocaleTimeString()}
      </span>
    </div>
  </div>
));

const ChatInterface = () => {
  const [contacts] = useState([
    {
      id: 1,
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      lastMessage: "Hey, how are you?",
      online: true
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      lastMessage: "Let's meet tomorrow",
      online: false
    },
    {
      id: 3,
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      lastMessage: "Thanks for your help!",
      online: true
    }
  ]);

  const [messages] = useState([
    {
      id: 1,
      senderId: 1,
      text: "Hi there! How are you?",
      timestamp: new Date().getTime() - 3600000
    },
    {
      id: 2,
      senderId: "me",
      text: "I'm good, thanks! How about you?",
      timestamp: new Date().getTime() - 3500000
    },
    {
      id: 3,
      senderId: 1,
      text: "Doing great! Would you like to catch up?",
      timestamp: new Date().getTime() - 3400000
    }
  ]);

  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const messageEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setNewMessage("");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-full md:w-1/3 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-5rem)]">
          {filteredContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              isSelected={selectedContact?.id === contact.id}
              onClick={setSelectedContact}
            />
          ))}
        </div>
      </div>

      <div className="hidden md:flex flex-col flex-1 bg-white">
        {selectedContact ? (
          <>
            <div className="flex items-center p-4 border-b border-gray-200">
              <img
                src={selectedContact.avatar}
                alt={selectedContact.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="font-semibold">{selectedContact.name}</h2>
                <div className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full ${selectedContact.online ? "bg-green-500" : "bg-gray-400"}`}
                  />
                  <span className="ml-2 text-sm text-gray-500">
                    {selectedContact.online ? "Online" : "Offline"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  isOwn={message.senderId === "me"}
                />
              ))}
              <div ref={messageEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Add emoji"
                >
                  <BsEmojiSmile size={20} />
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Attach file"
                >
                  <BsPaperclip size={20} />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  aria-label="Send message"
                >
                  <BsSend size={20} />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a contact to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;