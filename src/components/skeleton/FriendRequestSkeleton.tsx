import { Users } from "lucide-react"

const FriendRequestSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
          <Users className="text-purple-500" size={20} />
        </div>
        <h3 className="font-bold text-gray-900 text-lg">Friend Requests</h3>
      </div>
      <div className="animate-pulse space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FriendRequestSkeleton