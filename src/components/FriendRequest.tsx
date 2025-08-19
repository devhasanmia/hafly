import { Check, Users, X } from "lucide-react";
import FriendRequestSkeleton from "./skeleton/FriendRequestSkeleton";
import { useGetAllFriendRequestQuery } from "../redux/api/features/friendRequest/friendRequestApi";

type RequestUser = {
    sender: any;
    _id: string;
    name: string;
    email?: string;
    profile?: { profilePicture?: string };
};

export const FriendRequest = () => {
    const { data, isLoading } = useGetAllFriendRequestQuery("");
    const requests: RequestUser[] = data?.data ?? [];

    if (isLoading) {
        return (
            <FriendRequestSkeleton />
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="text-purple-500" size={20} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Friend Requests</h3>
            </div>

            <div className="space-y-4">
                {requests.length > 0 ? (
                    requests.map((user) => (
                        <div
                            key={user._id}
                            className="border border-gray-100 rounded-xl p-4 hover:shadow-sm transition-shadow"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={user.sender.profile?.profilePicture || "https://res.cloudinary.com/ddoacwzvp/image/upload/v1755624472/pngwing.com_yptwem.png"}
                                    alt={user.sender.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-gray-900">{user.sender.name}</p>
                                    {user.email && (
                                        <p className="text-sm text-gray-500">{user.sender.email}</p>
                                    )}
                                </div>
                            </div>
                            <div className="mt-4 flex gap-3">
                                <button
                                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                    onClick={() => console.log("accept", user._id)}
                                >
                                    <Check size={16} /> Accept
                                </button>
                                <button
                                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                    onClick={() => console.log("decline", user._id)}
                                >
                                    <X size={16} /> Decline
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                            <Users className="text-gray-400" size={32} />
                        </div>
                        <p className="text-gray-500 font-medium">No friend requests</p>
                        <p className="text-gray-400 text-sm mt-1">You're all caught up!</p>
                    </div>
                )}
            </div>
        </div>
    );
};
