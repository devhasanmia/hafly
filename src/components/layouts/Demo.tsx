// import React, { useState, useRef, useEffect } from 'react';
// import { 
//   Search, 
//   MessageCircle, 
//   Users, 
//   Wifi, 
//   Plus, 
//   Check, 
//   X, 
//   UserPlus, 
//   Send, 
//   ArrowLeft, 
//   Smile, 
//   Paperclip,
//   Sparkles
// } from 'lucide-react';

// // Types
// type Person = {
//   id: string;
//   name: string;
//   bio: string;
//   avatar: string;
//   relation: 'none' | 'requested' | 'friends';
//   isOnline?: boolean;
// };

// type Request = {
//   id: string;
//   name: string;
//   avatar: string;
// };

// interface Message {
//   id: string;
//   text: string;
//   sender: 'me' | 'them';
//   timestamp: Date;
// }

// // Initial Data
// const initialPeople: Person[] = [
//   {
//     id: 'u1',
//     name: 'Sadia Rahman',
//     bio: 'UI/UX Designer at TechCorp',
//     avatar: 'https://i.pravatar.cc/100?img=5',
//     relation: 'none',
//     isOnline: true
//   },
//   {
//     id: 'u2',
//     name: 'Naimul Hasan',
//     bio: 'MERN Stack Developer',
//     avatar: 'https://i.pravatar.cc/100?img=12',
//     relation: 'requested',
//     isOnline: false
//   },
//   {
//     id: 'u3',
//     name: 'Rafiul Karim',
//     bio: 'Product Manager',
//     avatar: 'https://i.pravatar.cc/100?img=22',
//     relation: 'friends',
//     isOnline: true
//   },
//   {
//     id: 'u4',
//     name: 'Tahsin Kabir',
//     bio: 'Motion Graphics Artist',
//     avatar: 'https://i.pravatar.cc/100?img=44',
//     relation: 'none',
//     isOnline: false
//   },
//   {
//     id: 'u5',
//     name: 'Fatema Sultana',
//     bio: 'Frontend Engineer',
//     avatar: 'https://i.pravatar.cc/100?img=16',
//     relation: 'friends',
//     isOnline: true
//   },
//   {
//     id: 'u6',
//     name: 'Mahmud Hassan',
//     bio: 'Data Scientist',
//     avatar: 'https://i.pravatar.cc/100?img=33',
//     relation: 'none',
//     isOnline: false
//   }
// ];

// const initialRequests: Request[] = [
//   {
//     id: 'u8',
//     name: 'Mim Akter',
//     avatar: 'https://i.pravatar.cc/100?img=49'
//   },
//   {
//     id: 'u9',
//     name: 'Jisan Ahmed',
//     avatar: 'https://i.pravatar.cc/100?img=18'
//   },
//   {
//     id: 'u10',
//     name: 'Zara Khan',
//     avatar: 'https://i.pravatar.cc/100?img=27'
//   }
// ];

// const initialSuggestions: Request[] = [
//   {
//     id: 'u11',
//     name: 'Arif Hossain',
//     avatar: 'https://i.pravatar.cc/100?img=8'
//   },
//   {
//     id: 'u12',
//     name: 'Tumpa Sultana',
//     avatar: 'https://i.pravatar.cc/100?img=26'
//   },
//   {
//     id: 'u13',
//     name: 'Karim Uddin',
//     avatar: 'https://i.pravatar.cc/100?img=51'
//   },
//   {
//     id: 'u14',
//     name: 'Nasir Ahmed',
//     avatar: 'https://i.pravatar.cc/100?img=15'
//   }
// ];

// // Components
// function MessageBubble({ message }: { message: Message }) {
//   const isMe = message.sender === 'me';
  
//   return (
//     <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-200`}>
//       <div className={`max-w-[75%] sm:max-w-[70%] ${isMe ? 'order-2' : 'order-1'}`}>
//         <div
//           className={`rounded-2xl px-4 py-3 text-sm shadow-md transition-all duration-200 hover:shadow-lg ${
//             isMe
//               ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-md ml-auto'
//               : 'bg-white text-gray-800 rounded-bl-md border border-gray-100'
//           }`}
//         >
//           <p className="whitespace-pre-wrap break-words">{message.text}</p>
//         </div>
//         <div className={`mt-1 px-1 ${isMe ? 'text-right' : 'text-left'}`}>
//           <span className="text-xs text-gray-400">
//             {message.timestamp.toLocaleTimeString('en-US', {
//               hour: 'numeric',
//               minute: '2-digit',
//               hour12: true
//             })}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PersonCard({ 
//   person, 
//   onSendRequest, 
//   onOpenChat, 
//   language 
// }: { 
//   person: Person; 
//   onSendRequest: (personId: string) => void; 
//   onOpenChat: (person: Person) => void; 
//   language: 'en' | 'bn';
// }) {
//   const getText = (key: string) => {
//     const texts = {
//       request: language === 'bn' ? 'রিকোয়েস্ট' : 'Request',
//       requested: language === 'bn' ? 'পাঠানো হয়েছে' : 'Requested',
//       message: language === 'bn' ? 'মেসেজ' : 'Message'
//     };
//     return texts[key as keyof typeof texts];
//   };

//   return (
//     <div
//       className="group relative flex items-center gap-4 rounded-2xl p-4 transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 cursor-pointer border border-transparent hover:border-indigo-100 hover:shadow-md"
//       onClick={() => {
//         if (person.relation === 'friends') {
//           onOpenChat(person);
//         }
//       }}
//     >
//       <div className="relative">
//         <img
//           src={person.avatar}
//           alt={person.name}
//           className="h-12 w-12 rounded-2xl object-cover shadow-md transition-transform duration-200 group-hover:scale-105"
//         />
//         {person.isOnline && (
//           <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500 shadow-sm"></div>
//         )}
//       </div>
      
//       <div className="min-w-0 flex-1">
//         <p className="truncate text-sm font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
//           {person.name}
//         </p>
//         <p className="truncate text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
//           {person.bio}
//         </p>
//       </div>
      
//       <div className="flex items-center gap-2">
//         {person.relation === 'none' && (
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               onSendRequest(person.id);
//             }}
//             className="flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 px-3 py-2 text-xs font-medium text-indigo-700 transition-all duration-200 hover:from-indigo-100 hover:to-purple-100 hover:shadow-sm active:scale-95"
//           >
//             <Plus className="h-3 w-3" />
//             {getText('request')}
//           </button>
//         )}
        
//         {person.relation === 'requested' && (
//           <button
//             disabled
//             className="flex items-center gap-1.5 rounded-xl bg-amber-50 border border-amber-200 px-3 py-2 text-xs font-medium text-amber-700 opacity-75"
//           >
//             <Check className="h-3 w-3" />
//             {getText('requested')}
//           </button>
//         )}
        
//         {person.relation === 'friends' && (
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               onOpenChat(person);
//             }}
//             className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-2 text-xs font-medium text-white shadow-md transition-all duration-200 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg active:scale-95"
//           >
//             <MessageCircle className="h-3 w-3" />
//             {getText('message')}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// function RequestCard({ 
//   request, 
//   onAccept, 
//   onDecline, 
//   language 
// }: { 
//   request: Request; 
//   onAccept: (request: Request) => void; 
//   onDecline: (requestId: string) => void; 
//   language: 'en' | 'bn';
// }) {
//   const getText = (key: string) => {
//     const texts = {
//       sentRequest: language === 'bn' ? 'আপনাকে রিকোয়েস্ট পাঠিয়েছে' : 'sent you a request',
//       accept: language === 'bn' ? 'গ্রহণ করুন' : 'Accept',
//       decline: language === 'bn' ? 'প্রত্যাখ্যান' : 'Decline'
//     };
//     return texts[key as keyof typeof texts];
//   };

//   return (
//     <div className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/50 p-4 transition-all duration-200 hover:bg-white hover:shadow-md">
//       <img
//         src={request.avatar}
//         alt={request.name}
//         className="h-12 w-12 rounded-2xl object-cover shadow-md transition-transform duration-200 group-hover:scale-105"
//       />
      
//       <div className="min-w-0 flex-1">
//         <p className="truncate text-sm font-semibold text-gray-900">{request.name}</p>
//         <p className="truncate text-xs text-gray-500">{getText('sentRequest')}</p>
//       </div>
      
//       <div className="flex items-center gap-2">
//         <button
//           onClick={() => onAccept(request)}
//           className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-3 py-2 text-xs font-medium text-white shadow-md transition-all duration-200 hover:from-emerald-700 hover:to-green-700 hover:shadow-lg active:scale-95"
//         >
//           <Check className="h-3 w-3" />
//           {getText('accept')}
//         </button>
        
//         <button
//           onClick={() => onDecline(request.id)}
//           className="flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:shadow-sm active:scale-95"
//         >
//           <X className="h-3 w-3" />
//           {getText('decline')}
//         </button>
//       </div>
//     </div>
//   );
// }

// function SuggestionCard({ 
//   suggestion, 
//   onSendRequest, 
//   language 
// }: { 
//   suggestion: Request; 
//   onSendRequest: (suggestionId: string) => void; 
//   language: 'en' | 'bn';
// }) {
//   const getText = (key: string) => {
//     const texts = {
//       suggestedForYou: language === 'bn' ? 'আপনার জন্য সাজেস্ট করা হয়েছে' : 'Suggested for you',
//       addFriend: language === 'bn' ? 'বন্ধু যোগ করুন' : 'Add Friend'
//     };
//     return texts[key as keyof typeof texts];
//   };

//   return (
//     <div className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/50 p-4 transition-all duration-200 hover:bg-white hover:shadow-md">
//       <img
//         src={suggestion.avatar}
//         alt={suggestion.name}
//         className="h-12 w-12 rounded-2xl object-cover shadow-md transition-transform duration-200 group-hover:scale-105"
//       />
      
//       <div className="min-w-0 flex-1">
//         <p className="truncate text-sm font-semibold text-gray-900">{suggestion.name}</p>
//         <p className="truncate text-xs text-gray-500">{getText('suggestedForYou')}</p>
//       </div>
      
//       <button
//         onClick={() => onSendRequest(suggestion.id)}
//         className="flex items-center gap-1.5 rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-2 text-xs font-medium text-purple-700 transition-all duration-200 hover:from-purple-100 hover:to-pink-100 hover:shadow-sm active:scale-95"
//       >
//         <UserPlus className="h-3 w-3" />
//         {getText('addFriend')}
//       </button>
//     </div>
//   );
// }

// // Main App Component
// function App() {
//   const [activeView, setActiveView] = useState<'people' | 'chat' | 'requests'>('people');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [language, setLanguage] = useState<'en' | 'bn'>('bn');
  
//   // State management
//   const [people, setPeople] = useState<Person[]>(initialPeople);
//   const [incomingRequests, setIncomingRequests] = useState<Request[]>(initialRequests);
//   const [suggestions, setSuggestions] = useState<Request[]>(initialSuggestions);
//   const [activeChatUser, setActiveChatUser] = useState<Person | null>(null);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [messageText, setMessageText] = useState('');
  
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const textareaRef = useRef<HTMLTextAreaElement>(null);

//   const getText = (key: string) => {
//     const texts = {
//       people: language === 'bn' ? 'মানুষজন' : 'People',
//       online: language === 'bn' ? 'অনলাইন' : 'Online',
//       noPeople: language === 'bn' ? 'কোন মানুষ পাওয়া যায়নি' : 'No people found',
//       friendRequests: language === 'bn' ? 'ফ্রেন্ড রিকোয়েস্ট' : 'Friend Requests',
//       suggested: language === 'bn' ? 'সাজেস্ট করা হয়েছে' : 'Suggested',
//       noPendingRequests: language === 'bn' ? 'কোন পেন্ডিং রিকোয়েস্ট নেই' : 'No pending requests',
//       noSuggestions: language === 'bn' ? 'কোন সাজেশন নেই' : 'No suggestions',
//       selectFriend: language === 'bn' ? 'একজন বন্ধুকে নির্বাচন করুন' : 'Select a friend',
//       noConversation: language === 'bn' ? 'এখনো কোন কথোপকথন নেই' : 'No conversation yet',
//       typeMessage: language === 'bn' ? 'একটি মেসেজ লিখুন...' : 'Type a message...',
//       send: language === 'bn' ? 'পাঠান' : 'Send',
//       notFriendsTitle: language === 'bn' ? 'বন্ধুকে সিলেক্ট করুন' : 'Select a friend',
//       notFriendsMessage: language === 'bn' ? 'ফ্রেন্ড রিকোয়েস্ট accept না করলে চ্যাট অন হবে না' : 'You need to be friends to start chatting',
//       cannotChat: language === 'bn' ? 'বন্ধু না হলে চ্যাট করা যাবে না — আগে Friend Request accept করুন।' : 'You cannot chat until you become friends — please accept the friend request first.',
//       chat: language === 'bn' ? 'চ্যাট' : 'Chat',
//       requests: language === 'bn' ? 'রিকোয়েস্ট' : 'Requests'
//     };
//     return texts[key as keyof typeof texts];
//   };

//   const filteredPeople = people.filter(person =>
//     person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     person.bio.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const onlineCount = people.filter(p => p.isOnline && p.relation === 'friends').length;

//   // Event handlers
//   const handleSendFriendRequest = (personId: string) => {
//     setPeople(prev => prev.map(person => 
//       person.id === personId ? { ...person, relation: 'requested' } : person
//     ));
//   };

//   const handleAcceptRequest = (request: Request) => {
//     setPeople(prev => [...prev, {
//       id: request.id,
//       name: request.name,
//       bio: 'New friend',
//       avatar: request.avatar,
//       relation: 'friends',
//       isOnline: Math.random() > 0.3
//     }]);
//     setIncomingRequests(prev => prev.filter(r => r.id !== request.id));
//   };

//   const handleDeclineRequest = (requestId: string) => {
//     setIncomingRequests(prev => prev.filter(r => r.id !== requestId));
//   };

//   const handleSendSuggestionRequest = (suggestionId: string) => {
//     const suggestion = suggestions.find(s => s.id === suggestionId);
//     if (suggestion) {
//       setPeople(prev => [...prev, {
//         id: suggestion.id,
//         name: suggestion.name,
//         bio: 'Suggested',
//         avatar: suggestion.avatar,
//         relation: 'requested'
//       }]);
//       setSuggestions(prev => prev.filter(s => s.id !== suggestionId));
//     }
//   };

//   const openChatWith = (person: Person) => {
//     setActiveChatUser(person);
    
//     if (person.relation === 'friends') {
//       // Simulate loading previous messages
//       const demoMessages: Message[] = [
//         {
//           id: '1',
//           text: 'Hey there! 👋',
//           sender: 'them',
//           timestamp: new Date(Date.now() - 300000)
//         },
//         {
//           id: '2',
//           text: 'Hi! Ready to collaborate on that project?',
//           sender: 'me',
//           timestamp: new Date(Date.now() - 240000)
//         },
//         {
//           id: '3',
//           text: 'Absolutely! I have some great ideas to share.',
//           sender: 'them',
//           timestamp: new Date(Date.now() - 180000)
//         },
//         {
//           id: '4',
//           text: 'Perfect! Let me know when you\'re free to discuss.',
//           sender: 'me',
//           timestamp: new Date(Date.now() - 120000)
//         }
//       ];
//       setMessages(demoMessages);
//     } else {
//       setMessages([]);
//     }
//   };

//   const sendMessage = (text: string) => {
//     const newMessage: Message = {
//       id: Date.now().toString(),
//       text,
//       sender: 'me',
//       timestamp: new Date()
//     };
    
//     setMessages(prev => [...prev, newMessage]);
    
//     // Simulate response from the other user
//     setTimeout(() => {
//       const responses = [
//         'That sounds great!',
//         'I agree with you.',
//         'Let me think about it.',
//         'Perfect! 👍',
//         'Thanks for sharing!',
//         'Interesting point!',
//         'I see what you mean.',
//         'Good idea! 💡'
//       ];
      
//       const randomResponse = responses[Math.floor(Math.random() * responses.length)];
//       const responseMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         text: randomResponse,
//         sender: 'them',
//         timestamp: new Date()
//       };
      
//       setMessages(prev => [...prev, responseMessage]);
//     }, 1000 + Math.random() * 2000);
//   };

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const text = messageText.trim();
//     if (!text || !activeChatUser || activeChatUser.relation !== 'friends') return;
    
//     sendMessage(text);
//     setMessageText('');
//     if (textareaRef.current) {
//       textareaRef.current.style.height = 'auto';
//     }
//   };

//   const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setMessageText(e.target.value);
    
//     // Auto-resize textarea
//     const textarea = e.target;
//     textarea.style.height = 'auto';
//     textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
//   };

//   const canChat = activeChatUser?.relation === 'friends';

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40">
//       {/* Header */}
//       <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl shadow-sm">
//         <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
//           <div className="flex items-center gap-3">
//             <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg flex items-center justify-center">
//               <MessageCircle className="h-5 w-5 text-white" />
//             </div>
//             <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               ChitChat
//             </span>
//           </div>
          
//           <div className="ml-auto flex items-center gap-3">
//             <div className="hidden sm:block relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder={language === 'bn' ? 'মানুষ খুঁজুন...' : 'Search people...'}
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-64 pl-10 pr-4 py-2.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 hover:bg-white/70"
//               />
//             </div>
            
//             <button
//               onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
//               className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-white hover:shadow-md active:scale-95"
//             >
//               {language === 'bn' ? 'English' : 'বাংলা'}
//             </button>
            
//             <img
//               src="https://i.pravatar.cc/40?img=32"
//               alt="Profile"
//               className="h-10 w-10 rounded-2xl border-2 border-white shadow-md transition-transform duration-200 hover:scale-105"
//             />
//           </div>
//         </div>
//       </header>
      
//       <main className="mx-auto max-w-7xl px-4 py-4">
//         {/* Desktop Layout */}
//         <div className="hidden md:grid md:grid-cols-12 md:gap-6">
//           {/* People List */}
//           <aside className="md:col-span-3">
//             <div className="rounded-3xl border border-gray-200/60 bg-white/70 backdrop-blur-sm shadow-lg">
//               <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
//                 <div className="flex items-center gap-2">
//                   <Users className="h-4 w-4 text-indigo-600" />
//                   <h2 className="text-lg font-semibold text-gray-900">{getText('people')}</h2>
//                 </div>
//                 <div className="flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1">
//                   <Wifi className="h-3 w-3 text-green-600" />
//                   <span className="text-xs font-medium text-green-700">
//                     {getText('online')} • {onlineCount}
//                   </span>
//                 </div>
//               </div>
              
//               <div className="max-h-[70vh] overflow-y-auto">
//                 {filteredPeople.length > 0 ? (
//                   <div className="space-y-2 p-4">
//                     {filteredPeople.map((person) => (
//                       <PersonCard
//                         key={person.id}
//                         person={person}
//                         onSendRequest={handleSendFriendRequest}
//                         onOpenChat={(person) => {
//                           openChatWith(person);
//                         }}
//                         language={language}
//                       />
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="flex flex-col items-center justify-center py-12 text-center">
//                     <Users className="h-12 w-12 text-gray-300 mb-4" />
//                     <p className="text-sm font-medium text-gray-500">{getText('noPeople')}</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </aside>
          
//           {/* Chat Area */}
//           <section className="md:col-span-6">
//             <div className="grid h-[78vh] grid-rows-[auto_1fr_auto] rounded-3xl border border-gray-200/60 bg-white/70 backdrop-blur-sm shadow-lg">
//               {/* Chat Header */}
//               <div className="flex items-center gap-4 border-b border-gray-100 px-6 py-4">
//                 <div className="relative">
//                   <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-md flex items-center justify-center">
//                     {activeChatUser ? (
//                       <img
//                         src={activeChatUser.avatar}
//                         alt={activeChatUser.name}
//                         className="h-12 w-12 rounded-2xl object-cover"
//                       />
//                     ) : (
//                       <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300"></div>
//                     )}
//                   </div>
//                   {activeChatUser?.isOnline && (
//                     <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500 shadow-sm"></div>
//                   )}
//                 </div>
                
//                 <div className="flex-1 min-w-0">
//                   <p className="text-lg font-semibold text-gray-900 truncate">
//                     {activeChatUser?.name || getText('selectFriend')}
//                   </p>
//                   <p className="text-sm text-gray-500 truncate">
//                     {activeChatUser 
//                       ? (activeChatUser.relation === 'friends' 
//                           ? (activeChatUser.isOnline ? (language === 'bn' ? 'এখন অনলাইন' : 'Online now') : (language === 'bn' ? 'অফলাইন' : 'Offline'))
//                           : (language === 'bn' ? 'এখনো বন্ধু নয়' : 'Not friends yet'))
//                       : getText('noConversation')
//                     }
//                   </p>
//                 </div>
                
//                 {activeChatUser && (
//                   <div className={`rounded-full px-3 py-1.5 text-xs font-medium ${
//                     activeChatUser.relation === 'friends'
//                       ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
//                       : 'bg-amber-50 text-amber-700 border border-amber-200'
//                   }`}>
//                     {activeChatUser.relation === 'friends' 
//                       ? (language === 'bn' ? 'বন্ধু' : 'Friends')
//                       : (language === 'bn' ? 'অনুরোধ করা হয়েছে' : 'Requested')
//                     }
//                   </div>
//                 )}
//               </div>

//               {/* Messages Area */}
//               <div className="overflow-y-auto p-6">
//                 {!activeChatUser ? (
//                   <div className="flex h-full items-center justify-center text-center">
//                     <div className="max-w-sm">
//                       <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
//                         <MessageCircle className="h-8 w-8 text-indigo-600" />
//                       </div>
//                       <p className="text-lg font-semibold text-gray-900 mb-2">{getText('notFriendsTitle')}</p>
//                       <p className="text-sm text-gray-500">{getText('notFriendsMessage')}</p>
//                     </div>
//                   </div>
//                 ) : !canChat ? (
//                   <div className="flex h-full items-center justify-center text-center">
//                     <div className="max-w-sm rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 px-6 py-8">
//                       <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
//                         <MessageCircle className="h-6 w-6 text-amber-600" />
//                       </div>
//                       <p className="text-sm font-medium text-amber-800">{getText('cannotChat')}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     {messages.map((message) => (
//                       <MessageBubble key={message.id} message={message} />
//                     ))}
//                     <div ref={messagesEndRef} />
//                   </div>
//                 )}
//               </div>

//               {/* Message Input */}
//               <form onSubmit={handleSubmit} className="flex items-end gap-3 border-t border-gray-100 p-4">
//                 <div className="flex-1 relative">
//                   <textarea
//                     ref={textareaRef}
//                     value={messageText}
//                     onChange={handleTextareaChange}
//                     placeholder={getText('typeMessage')}
//                     disabled={!canChat}
//                     rows={1}
//                     className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3 pr-20 text-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 disabled:opacity-60 disabled:cursor-not-allowed"
//                     style={{ minHeight: '48px', maxHeight: '120px' }}
//                     onKeyDown={(e) => {
//                       if (e.key === 'Enter' && !e.shiftKey) {
//                         e.preventDefault();
//                         handleSubmit(e);
//                       }
//                     }}
//                   />
//                   <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
//                     <button
//                       type="button"
//                       className="rounded-xl p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200 disabled:opacity-50"
//                       disabled={!canChat}
//                     >
//                       <Smile className="h-4 w-4" />
//                     </button>
//                     <button
//                       type="button"
//                       className="rounded-xl p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200 disabled:opacity-50"
//                       disabled={!canChat}
//                     >
//                       <Paperclip className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
                
//                 <button
//                   type="submit"
//                   disabled={!messageText.trim() || !canChat}
//                   className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-3 text-white shadow-lg transition-all duration-200 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl disabled:from-gray-300 disabled:to-gray-400 disabled:shadow-none active:scale-95 disabled:cursor-not-allowed"
//                 >
//                   <Send className="h-5 w-5" />
//                 </button>
//               </form>
//             </div>
//           </section>
          
//           {/* Requests and Suggestions */}
//           <aside className="md:col-span-3">
//             <div className="space-y-6">
//               {/* Friend Requests */}
//               <div className="rounded-3xl border border-gray-200/60 bg-white/70 backdrop-blur-sm shadow-lg">
//                 <div className="flex items-center gap-2 border-b border-gray-100 px-6 py-4">
//                   <UserPlus className="h-4 w-4 text-emerald-600" />
//                   <h2 className="text-lg font-semibold text-gray-900">{getText('friendRequests')}</h2>
//                   {incomingRequests.length > 0 && (
//                     <span className="ml-auto rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
//                       {incomingRequests.length}
//                     </span>
//                   )}
//                 </div>
                
//                 <div className="max-h-[35vh] overflow-y-auto">
//                   {incomingRequests.length > 0 ? (
//                     <div className="space-y-2 p-4">
//                       {incomingRequests.map((request) => (
//                         <RequestCard
//                           key={request.id}
//                           request={request}
//                           onAccept={handleAcceptRequest}
//                           onDecline={handleDeclineRequest}
//                           language={language}
//                         />
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="flex flex-col items-center justify-center py-8 text-center">
//                       <Users className="h-8 w-8 text-gray-300 mb-3" />
//                       <p className="text-sm text-gray-500">{getText('noPendingRequests')}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Suggestions */}
//               <div className="rounded-3xl border border-gray-200/60 bg-white/70 backdrop-blur-sm shadow-lg">
//                 <div className="flex items-center gap-2 border-b border-gray-100 px-6 py-4">
//                   <Sparkles className="h-4 w-4 text-purple-600" />
//                   <h2 className="text-lg font-semibold text-gray-900">{getText('suggested')}</h2>
//                 </div>
                
//                 <div className="max-h-[35vh] overflow-y-auto">
//                   {suggestions.length > 0 ? (
//                     <div className="space-y-2 p-4">
//                       {suggestions.map((suggestion) => (
//                         <SuggestionCard
//                           key={suggestion.id}
//                           suggestion={suggestion}
//                           onSendRequest={handleSendSuggestionRequest}
//                           language={language}
//                         />
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="flex flex-col items-center justify-center py-8 text-center">
//                       <Sparkles className="h-8 w-8 text-gray-300 mb-3" />
//                       <p className="text-sm text-gray-500">{getText('noSuggestions')}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </div>

//         {/* Mobile Layout */}
//         <div className="md:hidden">
//           {activeView === 'people' && (
//             <div className="rounded-3xl border border-gray-200/60 bg-white/70 backdrop-blur-sm shadow-lg">
//               <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
//                 <div className="flex items-center gap-2">
//                   <Users className="h-4 w-4 text-indigo-600" />
//                   <h2 className="text-lg font-semibold text-gray-900">{getText('people')}</h2>
//                 </div>
//                 <div className="flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1">
//                   <Wifi className="h-3 w-3 text-green-600" />
//                   <span className="text-xs font-medium text-green-700">
//                     {getText('online')} • {onlineCount}
//                   </span>
//                 </div>
//               </div>
              
//               <div className="max-h-[70vh] overflow-y-auto">
//                 {filteredPeople.length > 0 ? (
//                   <div className="space-y-2 p-4">
//                     {filteredPeople.map((person) => (
//                       <PersonCard
//                         key={person.id}
//                         person={person}
//                         onSendRequest={handleSendFriendRequest}
//                         onOpenChat={(person) => {
//                           openChatWith(person);
//                           if (person.relation === 'friends') {
//                             setActiveView('chat');
//                           }
//                         }}
//                         language={language}
//                       />
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="flex flex-col items-center justify-center py-12 text-center">
//                     <Users className="h-12 w-12 text-gray-300 mb-4" />
//                     <p className="text-sm font-medium text-gray-500">{getText('noPeople')}</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
          
//           {activeView === 'chat' && (
//             <div className="grid h-[78vh] grid-rows-[auto_1fr_auto] rounded-3xl border border-gray-200/60 bg-white/70 backdrop-blur-sm shadow-lg">
//               {/* Chat Header */}
//               <div className="flex items-center gap-4 border-b border-gray-100 px-6 py-4">
//                 <button
//                   onClick={() => setActiveView('people')}
//                   className="rounded-xl p-2 hover:bg-gray-100 transition-colors duration-200"
//                 >
//                   <ArrowLeft className="h-5 w-5 text-gray-600" />
//                 </button>
                
//                 <div className="relative">
//                   <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-md flex items-center justify-center">
//                     {activeChatUser ? (
//                       <img
//                         src={activeChatUser.avatar}
//                         alt={activeChatUser.name}
//                         className="h-12 w-12 rounded-2xl object-cover"
//                       />
//                     ) : (
//                       <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300"></div>
//                     )}
//                   </div>
//                   {activeChatUser?.isOnline && (
//                     <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500 shadow-sm"></div>
//                   )}
//                 </div>
                
//                 <div className="flex-1 min-w-0">
//                   <p className="text-lg font-semibold text-gray-900 truncate">
//                     {activeChatUser?.name || getText('selectFriend')}
//                   </p>
//                   <p className="text-sm text-gray-500 truncate">
//                     {activeChatUser 
//                       ? (activeChatUser.relation === 'friends' 
//                           ? (activeChatUser.isOnline ? (language === 'bn' ? 'এখন অনলাইন' : 'Online now') : (language === 'bn' ? 'অফলাইন' : 'Offline'))
//                           : (language === 'bn' ? 'এখনো বন্ধু নয়' : 'Not friends yet'))
//                       : getText('noConversation')
//                     }
//                   </p>
//                 </div>
                
//                 {activeChatUser && (
//                   <div className={`rounded-full px-3 py-1.5 text-xs font-medium ${
//                     activeChatUser.relation === 'friends'
//                       ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
//                       : 'bg-amber-50 text-amber-700 border border-amber-200'
//                   }`}>
//                     {activeChatUser.relation === 'friends' 
//                       ? (language === 'bn' ? 'বন্ধু' : 'Friends')
//                       : (language === 'bn' ? 'অনুরোধ করা হয়েছে' : 'Requested')
//                     }
//                   </div>
//                 )}
//               </div>

//               {/* Messages Area */}
//               <div className="overflow-y-auto p-6">
//                 {!activeChatUser ? (
//                   <div className="flex h-full items-center justify-center text-center">
//                     <div className="max-w-sm">
//                       <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
//                         <MessageCircle className="h-8 w-8 text-indigo-600" />
//                       </div>
//                       <p className="text-lg font-semibold text-gray-900 mb-2">{getText('notFriendsTitle')}</p>
//                       <p className="text-sm text-gray-500">{getText('notFriendsMessage')}</p>
//                     </div>
//                   </div>
//                 ) : !canChat ? (
//                   <div className="flex h-full items-center justify-center text-center">
//                     <div className="max-w-sm rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 px-6 py-8">
//                       <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
//                         <MessageCircle className="h-6 w-6 text-amber-600" />
//                       </div>
//                       <p className="text-sm font-medium text-amber-800">{getText('cannotChat')}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     {messages.map((message) => (
//                       <MessageBubble key={message.id} message={message} />
//                     ))}
//                     <div ref={messagesEndRef} />
//                   </div>
//                 )}
//               </div>

//               {/* Message Input */}
//               <form onSubmit={handleSubmit} className="flex items-end gap-3 border-t border-gray-100 p-4">
//                 <div className="flex-1 relative">
//                   <textarea
//                     ref={textareaRef}
//                     value={messageText}
//                     onChange={handleTextareaChange}
//                     placeholder={getText('typeMessage')}
//                     disabled={!canChat}
//                     rows={1}
//                     className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50/50 px-4 py-3 pr-20 text-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 disabled:opacity-60 disabled:cursor-not-allowed"
//                     style={{ minHeight: '48px', maxHeight: '120px' }}
//                     onKeyDown={(e) => {
//                       if (e.key === 'Enter' && !e.shiftKey) {
//                         e.preventDefault();
//                         handleSubmit(e);
//                       }
//                     }}
//                   />
//                   <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
//                     <button
//                       type="button"
//                       className="rounded-xl p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200 disabled:opacity-50"
//                       disabled={!canChat}
//                     >
//                       <Smile className="h-4 w-4" />
//                     </button>
//                     <button
//                       type="button"
//                       className="rounded-xl p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200 disabled:opacity-50"
//                       disabled={!canChat}
//                     >
//                       <Paperclip className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
                
//                 <button
//                   type="submit"
//                   disabled={!messageText.trim() || !canChat}
//                   className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-3 text-white shadow-lg transition-all duration-200 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl disabled:from-gray-300 disabled:to-gray-400 disabled:shadow-none active:scale-95 disabled:cursor-not-allowed"
//                 >
//                   <Send className="h-5 w-5" />
//                 </button>
//               </form>
//             </div>
//           )}
          
//           {activeView === 'requests' && (
//             <div className="space-y-6">
//               {/* Friend Requests */}
//               <div className="rounded-3xl border border-gray-200/60 bg-white/70 backdrop-blur-sm shadow-lg">
//                 <div className="flex items-center gap-2 border-b border-gray-100 px-6 py-4">
//                   <UserPlus className="h-4 w-4 text-emerald-600" />
//                   <h2 className="text-lg font-semibold text-gray-900">{getText('friendRequests')}</h2>
//                   {incomingRequests.length > 0 && (
//                     <span className="ml-auto rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
//                       {incomingRequests.length}
//                     </span>
//                   )}
//                 </div>
                
//                 <div className="max-h-[35vh] overflow-y-auto">
//                   {incomingRequests.length > 0 ? (
//                     <div className="space-y-2 p-4">
//                       {incomingRequests.map((request) => (
//                         <RequestCard
//                           key={request.id}
//                           request={request}
//                           onAccept={handleAcceptRequest}
//                           onDecline={handleDeclineRequest}
//                           language={language}
//                         />
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="flex flex-col items-center justify-center py-8 text-center">
//                       <Users className="h-8 w-8 text-gray-300 mb-3" />
//                       <p className="text-sm text-gray-500">{getText('noPendingRequests')}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Suggestions */}
//               <div className="rounded-3xl border border-gray-200/60 bg-white/70 backdrop-blur-sm shadow-lg">
//                 <div className="flex items-center gap-2 border-b border-gray-100 px-6 py-4">
//                   <Sparkles className="h-4 w-4 text-purple-600" />
//                   <h2 className="text-lg font-semibold text-gray-900">{getText('suggested')}</h2>
//                 </div>
                
//                 <div className="max-h-[35vh] overflow-y-auto">
//                   {suggestions.length > 0 ? (
//                     <div className="space-y-2 p-4">
//                       {suggestions.map((suggestion) => (
//                         <SuggestionCard
//                           key={suggestion.id}
//                           suggestion={suggestion}
//                           onSendRequest={handleSendSuggestionRequest}
//                           language={language}
//                         />
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="flex flex-col items-center justify-center py-8 text-center">
//                       <Sparkles className="h-8 w-8 text-gray-300 mb-3" />
//                       <p className="text-sm text-gray-500">{getText('noSuggestions')}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Mobile Navigation */}
//       <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200/60 bg-white/80 backdrop-blur-xl md:hidden">
//         <div className="flex items-center justify-around px-4 py-2">
//           <button
//             onClick={() => setActiveView('people')}
//             className={`flex flex-col items-center gap-1 rounded-2xl px-6 py-3 text-xs font-medium transition-all duration-200 ${
//               activeView === 'people'
//                 ? 'bg-indigo-100 text-indigo-700'
//                 : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
//             }`}
//           >
//             <Users className="h-5 w-5" />
//             <span>{getText('people')}</span>
//           </button>
          
//           <button
//             onClick={() => setActiveView('chat')}
//             className={`flex flex-col items-center gap-1 rounded-2xl px-6 py-3 text-xs font-medium transition-all duration-200 ${
//               activeView === 'chat'
//                 ? 'bg-indigo-100 text-indigo-700'
//                 : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
//             }`}
//           >
//             <MessageCircle className="h-5 w-5" />
//             <span>{getText('chat')}</span>
//           </button>
          
//           <button
//             onClick={() => setActiveView('requests')}
//             className={`relative flex flex-col items-center gap-1 rounded-2xl px-6 py-3 text-xs font-medium transition-all duration-200 ${
//               activeView === 'requests'
//                 ? 'bg-indigo-100 text-indigo-700'
//                 : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
//             }`}
//           >
//             <UserPlus className="h-5 w-5" />
//             <span>{getText('requests')}</span>
//             {incomingRequests.length > 0 && (
//               <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
//                 {incomingRequests.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default App;