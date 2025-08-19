import { useState } from "react";
import { Search, Users, Bookmark, Bell, Settings, Menu, X } from "lucide-react";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Logo + Hamburger (Mobile) */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hafly
          </h1>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-700 rounded-full"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search Box */}
        <div className="flex-1 w-full max-w-md relative order-1 md:order-none mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search posts, people..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors">
            <Users size={20} />
            <span className="font-medium">Friends</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors">
            <Bookmark size={20} />
            <span className="font-medium">Saved</span>
          </button>
        </div>

        {/* User Controls */}
        <div className="flex items-center space-x-4 order-2 md:order-none">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
          </button>

          <button className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
            <Settings size={20} />
          </button>

          <img
            src="https://i.pravatar.cc/40?img=0"
            alt="Profile"
            className="h-10 w-10 rounded-full border-2 border-blue-500 cursor-pointer hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm py-2 space-y-2 px-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 w-full">
            <Users size={20} />
            <span>Friends</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 w-full">
            <Bookmark size={20} />
            <span>Saved</span>
          </button>
        </div>
      )}

      {/* Notifications Dropdown */}
      {showNotifications && (
        <div className="absolute right-4 md:right-10 mt-2 w-80 md:w-96 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Notifications</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {[2,4,6].map((img,i)=>(
                <div key={i} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <img src={`https://i.pravatar.cc/40?img=${img}`} className="h-8 w-8 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      {img === 2 ? "Alex liked your post" : img===4 ? "Jordan commented on your photo" : "Taylor started following you"}
                    </p>
                    <p className="text-xs text-gray-500">{img===2 ? "5 minutes ago" : img===4 ? "15 minutes ago" : "1 hour ago"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
