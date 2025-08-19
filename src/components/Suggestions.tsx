import { Users } from "lucide-react"
import { useGetSuggestionsQuery } from "../redux/api/features/suggestions/suggestionsApi"

const Suggestions = () => {
    const { data: suggestions, isLoading } = useGetSuggestionsQuery("")

    if (isLoading) {
        return (
            <div className="p-6 bg-white/80 rounded-2xl shadow-sm border border-gray-200">
                <p className="text-gray-500 text-sm">Loading suggestions...</p>
            </div>
        )
    }

    return (
        
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center space-x-2 mb-4">
                    <Users className="text-purple-500" size={20} />
                    <h3 className="font-semibold text-gray-900">Suggestions</h3>
                </div>
                <div className="space-y-3">
                    {suggestions?.data?.map((suggestion: any) => (
                        <div key={suggestion._id} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <img
                                    src={
                                        suggestion?.profile?.profilePicture ||
                                        `https://res.cloudinary.com/ddoacwzvp/image/upload/v1755624472/pngwing.com_yptwem.png`
                                    }
                                    alt={suggestion.name}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-medium text-gray-900 text-sm">{suggestion.name}</p>
                                    {/* <p className="text-xs text-gray-500">Email- {suggestion?.email}</p> */}
                                </div>
                            </div>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                                Add
                            </button>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Suggestions
