'use client';

import { useState } from 'react';

const mockProfiles = [
  {
    id: 1,
    name: 'Amina',
    age: 26,
    location: 'Nairobi, 3 km away',
    county: 'Nairobi',
    bio: 'Love hiking Ngong Hills and good coffee. Looking for genuine connections.',
    interests: ['Travel', 'Music', 'Food'],
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop',
  },
  {
    id: 2,
    name: 'Brian',
    age: 29,
    location: 'Westlands, 5 km away',
    county: 'Nairobi',
    bio: 'Tech guy who enjoys football and matatu adventures. Let\'s explore the city together.',
    interests: ['Football', 'Tech', 'Comedy'],
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
  },
  {
    id: 3,
    name: 'Faith',
    age: 24,
    location: 'Kisumu, 12 km away',
    county: 'Kisumu',
    bio: 'Lake-side lover. Student by day, artist by night. Open to new friendships.',
    interests: ['Art', 'Swimming', 'Books'],
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
  },
];

export default function Discover() {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState([]);

  const current = mockProfiles[index];

  const handleSwipe = (direction) => {
    if (direction === 'like') {
      setLiked([...liked, current.id]);
    }
    if (index < mockProfiles.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0); // loop for demo
    }
  };

  if (!current) return <div className="p-8 text-center">No more profiles nearby right now.</div>;

  return (
    <div className="max-w-md mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Discover Nearby</h1>
      <p className="text-center text-gray-600 mb-6">Demo swipe cards — real GPS matching comes with backend.</p>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <img
          src={current.photo}
          alt={current.name}
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold">{current.name}, {current.age}</h2>
            <span className="bg-kenya-green text-white text-xs px-2 py-1 rounded">{current.county}</span>
          </div>
          <p className="text-kenya-green font-medium mt-1">{current.location}</p>
          <p className="mt-3 text-gray-700">{current.bio}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {current.interests.map((i) => (
              <span key={i} className="bg-gray-100 text-sm px-3 py-1 rounded-full">{i}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-8 mt-8">
        <button
          onClick={() => handleSwipe('pass')}
          className="w-16 h-16 bg-red-100 text-red-600 rounded-full text-3xl flex items-center justify-center hover:bg-red-200 transition"
        >
          ✕
        </button>
        <button
          onClick={() => handleSwipe('like')}
          className="w-16 h-16 bg-green-100 text-green-600 rounded-full text-3xl flex items-center justify-center hover:bg-green-200 transition"
        >
          ♥
        </button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-4">
        Liked: {liked.length} | This is a frontend demo
      </p>
    </div>
  );
}