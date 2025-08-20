import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Plus,
  Search,
  Bell,
  Settings,
  Home,
  User,
  Users,
  Bookmark,
  TrendingUp,
  MoreHorizontal,
  Camera,
  Video,
  Smile,
  Send,
  ThumbsUp,
  Eye,
  Star,
  MapPin,
  Calendar,
} from "lucide-react";
import Suggestions from "../Suggestions";
import ProfileCard from "../ProfileCard";
import { FriendRequest } from "../FriendRequest";
import Header from "../Header";

interface Post {
  id: number;
  author: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  liked: boolean;
  location?: string;
}

interface Story {
  id: number;
  name: string;
  avatar: string;
  viewed: boolean;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/100?img=1",
      time: "2h",
      content:
        "Just finished an amazing hike in the mountains! The view was absolutely breathtaking. Nature never fails to inspire me. 🏔️",
      image:
        "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      likes: 124,
      comments: 28,
      shares: 12,
      liked: false,
      location: "Rocky Mountains",
    },
    {
      id: 2,
      author: "Mike Chen",
      avatar: "https://i.pravatar.cc/100?img=3",
      time: "4h",
      content:
        "Excited to share my latest photography project! Spent weeks capturing the beauty of urban architecture. What do you think?",
      image:
        "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      likes: 89,
      comments: 15,
      shares: 7,
      liked: true,
      location: "New York City",
    },
    {
      id: 3,
      author: "Emma Davis",
      avatar: "https://i.pravatar.cc/100?img=5",
      time: "6h",
      content:
        "Cooking has become my new passion during weekends. Today's creation: homemade pasta with garden-fresh herbs! 🍝",
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      likes: 156,
      comments: 32,
      shares: 18,
      liked: false,
    },
  ]);

  const [stories] = useState<Story[]>([
    {
      id: 1,
      name: "Your Story",
      avatar: "https://i.pravatar.cc/80?img=0",
      viewed: false,
    },
    {
      id: 2,
      name: "Alex",
      avatar: "https://i.pravatar.cc/80?img=2",
      viewed: false,
    },
    {
      id: 3,
      name: "Jordan",
      avatar: "https://i.pravatar.cc/80?img=4",
      viewed: true,
    },
    {
      id: 4,
      name: "Taylor",
      avatar: "https://i.pravatar.cc/80?img=6",
      viewed: false,
    },
    {
      id: 5,
      name: "Casey",
      avatar: "https://i.pravatar.cc/80?img=8",
      viewed: true,
    },
    {
      id: 6,
      name: "Morgan",
      avatar: "https://i.pravatar.cc/80?img=10",
      viewed: false,
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: posts.length + 1,
        author: "You",
        avatar: "https://i.pravatar.cc/100?img=0",
        time: "now",
        content: newPost,
        likes: 0,
        comments: 0,
        shares: 0,
        liked: false,
      };
      setPosts([post, ...posts]);
      setNewPost("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}

      <Header />
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <aside className="hidden lg:block lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <ProfileCard />

          {/* Friend Request Topics */}
          <FriendRequest />
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-2 space-y-6">
          {/* Stories */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="flex flex-col items-center space-y-2 min-w-max cursor-pointer group"
                >
                  <div
                    className={`relative ${
                      story.id === 1
                        ? "bg-gradient-to-tr from-blue-500 to-purple-600"
                        : story.viewed
                        ? "bg-gray-300"
                        : "bg-gradient-to-tr from-pink-500 to-orange-500"
                    } p-0.5 rounded-full group-hover:scale-105 transition-transform`}
                  >
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="h-16 w-16 rounded-full border-2 border-white"
                    />
                    {story.id === 1 && (
                      <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1">
                        <Plus size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-gray-700 text-center max-w-16 truncate">
                    {story.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Post Creation */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex space-x-4">
              <img
                src="https://i.pravatar.cc/50?img=0"
                className="h-12 w-12 rounded-full border-2 border-blue-500"
              />
              <div className="flex-1">
                <textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full p-3 bg-gray-50 border-0 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  rows={3}
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-green-500 hover:text-green-600 transition-colors">
                      <Camera size={20} />
                      <span className="hidden sm:inline">Photo</span>
                    </button>
                    <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors">
                      <Video size={20} />
                      <span className="hidden sm:inline">Video</span>
                    </button>
                    <button className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-600 transition-colors">
                      <Smile size={20} />
                      <span className="hidden sm:inline">Feeling</span>
                    </button>
                  </div>
                  <button
                    onClick={handlePostSubmit}
                    disabled={!newPost.trim()}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center space-x-2"
                  >
                    <Send size={16} />
                    <span>Post</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Feed */}
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="h-12 w-12 rounded-full border-2 border-transparent hover:border-blue-500 transition-colors cursor-pointer"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors">
                        {post.author}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{post.time}</span>
                        {post.location && (
                          <>
                            <span>•</span>
                            <MapPin size={12} />
                            <span>{post.location}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-6 pb-4">
                <p className="text-gray-800 leading-relaxed">{post.content}</p>
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="mx-6 mb-4">
                  <img
                    src={post.image}
                    alt="Post content"
                    className="w-full rounded-xl object-cover cursor-pointer hover:opacity-95 transition-opacity"
                  />
                </div>
              )}

              {/* Post Stats */}
              <div className="px-6 py-2 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <ThumbsUp size={14} className="text-blue-500" />
                      <Heart size={14} className="text-red-500" />
                      <span>{post.likes}</span>
                    </div>
                    <span>{post.comments} comments</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye size={14} />
                    <span>{Math.floor(post.likes * 2.5)} views</span>
                  </div>
                </div>
              </div>

              {/* Post Actions */}
              <div className="px-6 py-3 border-t border-gray-100">
                <div className="flex items-center justify-around">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                      post.liked
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    <ThumbsUp
                      size={18}
                      className={post.liked ? "fill-current" : ""}
                    />
                    <span className="font-medium">Like</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all">
                    <MessageCircle size={18} />
                    <span className="font-medium">Comment</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all">
                    <Share2 size={18} />
                    <span className="font-medium">Share</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </main>

        {/* Right Sidebar */}
        <aside className="hidden lg:block lg:col-span-1 space-y-6">
          {/* Friends Online */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Online Friends</h3>
              <span className="text-sm text-green-500 font-medium">
                8 online
              </span>
            </div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((friend) => (
                <div
                  key={friend}
                  className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="relative">
                    <img
                      src={`https://i.pravatar.cc/40?img=${friend + 15}`}
                      alt="Friend"
                      className="h-10 w-10 rounded-full border-2 border-transparent hover:border-blue-500 transition-colors"
                    />
                    <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Friend {friend}</p>
                    <p className="text-xs text-gray-500">Active now</p>
                  </div>
                  <MessageCircle
                    size={16}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Friend Suggestions */}
          <Suggestions />

          {/* Events */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="text-orange-500" size={20} />
              <h3 className="font-semibold text-gray-900">Upcoming Events</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="font-medium text-gray-900 text-sm">
                  Photography Workshop
                </p>
                <p className="text-xs text-gray-600 mt-1">Tomorrow, 2:00 PM</p>
                <div className="flex items-center mt-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://i.pravatar.cc/20?img=30"
                      className="h-5 w-5 rounded-full border border-white"
                    />
                    <img
                      src="https://i.pravatar.cc/20?img=31"
                      className="h-5 w-5 rounded-full border border-white"
                    />
                    <img
                      src="https://i.pravatar.cc/20?img=32"
                      className="h-5 w-5 rounded-full border border-white"
                    />
                  </div>
                  <span className="text-xs text-gray-600 ml-2">12 going</span>
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-medium text-gray-900 text-sm">Tech Meetup</p>
                <p className="text-xs text-gray-600 mt-1">Friday, 6:00 PM</p>
                <div className="flex items-center mt-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://i.pravatar.cc/20?img=33"
                      className="h-5 w-5 rounded-full border border-white"
                    />
                    <img
                      src="https://i.pravatar.cc/20?img=34"
                      className="h-5 w-5 rounded-full border border-white"
                    />
                  </div>
                  <span className="text-xs text-gray-600 ml-2">24 going</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
