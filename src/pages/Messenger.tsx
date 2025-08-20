import { useState } from "react";
import { Send, Search, Phone, Video, MoreHorizontal, Smile, Home, Menu, X, ArrowLeft } from "lucide-react";
import { useGetSuggestionsQuery } from "../redux/api/features/suggestions/suggestionsApi";

const Messenger = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const {data:conversations } = useGetSuggestionsQuery("")
  const conversations = [
    { 
      id: "1", 
      name: "Hasan Mia", 
      lastMsg: "Hey, how are you?", 
      time: "2:30 PM",
      unread: 2,
      online: true,
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    { 
      id: "2", 
      name: "Rakib Ahmed", 
      lastMsg: "Let's meet tomorrow at the coffee shop!", 
      time: "1:15 PM",
      unread: 0,
      online: true,
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    { 
      id: "3", 
      name: "Ayesha Rahman", 
      lastMsg: "Thanks for your help yesterday!", 
      time: "11:45 AM",
      unread: 0,
      online: false,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    { 
      id: "4", 
      name: "Sadia Khan", 
      lastMsg: "The project is looking great!", 
      time: "Yesterday",
      unread: 1,
      online: true,
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
  ];

  const messages = [
    { id: 1, text: "Hey! How's your day going?", sender: "other", time: "2:25 PM" },
    { id: 2, text: "Pretty good! Just finished a big project at work. How about you?", sender: "me", time: "2:26 PM" },
    { id: 3, text: "That's awesome! I've been working on some new designs.", sender: "other", time: "2:28 PM" },
    { id: 4, text: "Would love to see them sometime!", sender: "me", time: "2:29 PM" },
    { id: 5, text: "Absolutely! I'll share them with you soon 🎨", sender: "other", time: "2:30 PM" },
  ];

  const selectedChatData = conversations.find(c => c.id === selectedChat);

  const handleSend = () => {
    if (message.trim()) {
      setMessage("");
    }
  };

  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chatId);
    setIsSidebarOpen(false); // Close sidebar on mobile when chat is selected
  };
  return (
    <div className="h-screen flex bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Sidebar */}
      <div className={`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed lg:relative z-30 w-80 lg:w-80 bg-white/80 backdrop-blur-sm border-r border-gray-200/50 shadow-xl transition-transform duration-300 ease-in-out h-full flex flex-col`}>
        {/* Header */}
        <div className="p-6 border-b border-gray-200/50 bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Messages</h2>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => window.location.reload()}
                className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200"
                title="Home"
              >
                <Home size={20} />
              </button>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="overflow-y-auto flex-1">
          {conversations.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleChatSelect(chat.id)}
              className={`p-4 cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border-b border-gray-100/50 ${
                selectedChat === chat.id 
                  ? "bg-gradient-to-r from-blue-100 to-purple-100 border-l-4 border-l-blue-500" 
                  : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                    chat.online ? 'bg-green-500' : 'bg-gray-400'
                  }`}></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-900 truncate">{chat.name}</p>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-600 truncate flex-1 mr-2">{chat.lastMsg}</p>
                    {chat.unread > 0 && (
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Chat Area */}
      <div className="flex-1 flex flex-col lg:ml-0 h-full">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-white/80 backdrop-blur-sm border-b border-gray-200/50 shadow-sm flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
                  >
                    <Menu size={20} />
                  </button>
                  <button 
                    onClick={() => setSelectedChat(null)}
                    className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div className="relative">
                    <img
                      src={selectedChatData?.avatar}
                      alt={selectedChatData?.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-gray-200"
                    />
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                      selectedChatData?.online ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{selectedChatData?.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {selectedChatData?.online ? "Active now" : "Last seen recently"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
                    <Phone size={18} className="sm:w-5 sm:h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
                    <Video size={18} className="sm:w-5 sm:h-5" />
                  </button>
                  <button className="hidden sm:block p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
                    <MoreHorizontal size={18} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 sm:p-6 overflow-y-auto bg-gradient-to-b from-gray-50/50 to-blue-50/30 min-h-0">
              <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[280px] sm:max-w-xs lg:max-w-md px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-sm ${
                      msg.sender === 'me'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}>
                      <p className="text-sm sm:text-sm leading-relaxed">{msg.text}</p>
                      <p className={`text-xs mt-1 ${
                        msg.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Box */}
            <div className="p-3 sm:p-4 bg-white/80 backdrop-blur-sm border-t border-gray-200/50 flex-shrink-0">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-end space-x-2 sm:space-x-3">
                  <button className="hidden sm:block p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
                    <Smile size={18} className="sm:w-5 sm:h-5" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Type your message..."
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-12 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 resize-none text-sm sm:text-base"
                    />
                  </div>
                  <button 
                    onClick={handleSend}
                    disabled={!message.trim()}
                    className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-1 bg-gradient-to-b from-gray-50/50 to-blue-50/30 p-4 overflow-hidden">
            {/* Mobile menu button when no chat selected */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden fixed top-4 left-4 z-10 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Menu size={20} />
            </button>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Send className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Select a Conversation</h3>
              <p className="text-sm sm:text-base text-gray-600 px-4">Choose someone to start chatting with</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messenger;