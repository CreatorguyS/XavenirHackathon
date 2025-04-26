import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9DB] to-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-10">
        <h1 className="text-5xl font-bold text-center text-[#0D1B2A] mb-8">About Us</h1>
        
        <p className="text-lg text-gray-700 mb-6 text-center">
          Welcome to <span className="font-semibold text-[#0D1B2A]">Xavenir Listings</span> —  
          your trusted place for sharing and exploring available items around you!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-[#0D1B2A]">🌟 Our Mission</h2>
            <p className="text-gray-600">
              We aim to connect people by allowing them to post and discover free or useful resources 
              easily. Whether it's surplus food, books, tools, or anything else — we make sharing simple.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-[#0D1B2A]">🚀 How It Works</h2>
            <p className="text-gray-600">
              Adding a listing is quick and easy! Just provide details, upload an image, and post it. 
              Browse listings nearby, and connect with people to get what you need — all for free!
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-4">Join us in building a sustainable and helpful community 🌍</h2>
          <p className="text-gray-600">
            Together, we can reduce waste, promote sharing, and help those around us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
