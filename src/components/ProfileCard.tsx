import { useAppSelector } from "../redux/hooks"
import { Mail, MapPin, Info, Users, FileText, Edit } from "lucide-react"

const ProfileCard = () => {
  const userData = useAppSelector((state) => state.auth.user)

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden max-w-sm mx-auto transition-all hover:shadow-xl">
      {/* Cover Photo */}
      <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      
      {/* Profile Content */}
      <div className="px-6 pb-6">
        {/* Avatar + Name */}
        <div className="text-center relative">
          <div className="flex justify-center -mt-12 mb-3">
            <div className="relative">
              <img
                src={userData?.profile?.profilePicture || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                alt="Profile"
                className="h-20 w-20 rounded-full border-4 border-white shadow-lg"
              />
              <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1.5 rounded-full shadow-md hover:bg-blue-600 transition-colors">
                <Edit size={12} />
              </button>
            </div>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-1">{userData?.name}</h3>
          <p className="text-sm text-gray-500 mb-2">@{userData?.username || "username"}</p>
        
        </div>

        {/* Stats */}
        <div className="flex justify-between mt-6 px-4 py-3 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="font-semibold text-gray-900 flex items-center justify-center">
              <FileText size={14} className="mr-1 text-blue-500" /> 1.2K
            </div>
            <div className="text-gray-500 text-xs">Posts</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900 flex items-center justify-center">
              <Users size={14} className="mr-1 text-green-500" /> 5.4K
            </div>
            <div className="text-gray-500 text-xs">Friends</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900 flex items-center justify-center">
              <Users size={14} className="mr-1 text-purple-500" /> 342
            </div>
            <div className="text-gray-500 text-xs">Following</div>
          </div>
        </div>

        {/* Bio */}
        {userData?.profile?.bio && (
          <div className="mt-4 text-gray-700 text-sm p-3 bg-blue-50 rounded-lg flex items-start gap-2">
            <Info size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="leading-relaxed">{userData?.profile?.bio}</p>
          </div>
        )}

        {/* Contact Info */}
        <div className="mt-4 space-y-2">
          {/* Email */}
          {userData?.email && (
            <div className="text-gray-700 text-sm flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors">
              <Mail size={16} className="text-red-400 flex-shrink-0" />
              <p className="truncate">{userData?.email}</p>
            </div>
          )}

          {/* Address */}
          {userData?.profile?.address && (
            <div className="text-gray-700 text-sm flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors">
              <MapPin size={16} className="text-green-400 flex-shrink-0" />
              <p>{userData?.profile?.address}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard