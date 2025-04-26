import React from "react";

const ngos = [
  {
    id: 1,
    name: "Helping Hands",
    location: "Mumbai, India",
    services: 152,
    rating: 4.8,
    image: "/images/ngo.png",
  },
  {
    id: 2,
    name: "Care for All",
    location: "Delhi, India",
    services: 98,
    rating: 4.6,
    image: "/images/ngo.png",
  },
  {
    id: 3,
    name: "Hope Foundation",
    location: "Bangalore, India",
    services: 123,
    rating: 4.7,
    image: "/images/ngo.png",
  },
  {
    id: 4,
    name: "Smile Trust",
    location: "Kolkata, India",
    services: 88,
    rating: 4.5,
    image: "/images/ngo.png",
  },
  {
    id: 5,
    name: "Life Savers",
    location: "Chennai, India",
    services: 105,
    rating: 4.9,
    image: "/images/ngo.png",
  },
];

const List = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-10">NGOs & Organizations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ngos.map((ngo) => (
          <div
            key={ngo.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={ngo.image}
              alt={ngo.name}
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-400"
            />
            <h2 className="text-xl font-semibold mb-2">{ngo.name}</h2>
            <p className="text-gray-500 mb-2">{ngo.location}</p>
            <p className="text-gray-600 mb-1">Services Provided: <strong>{ngo.services}</strong></p>
            <p className="text-gray-600 mb-1">Rating: <strong>{ngo.rating} ⭐</strong></p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
