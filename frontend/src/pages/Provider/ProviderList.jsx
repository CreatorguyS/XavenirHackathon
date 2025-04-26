import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ngoList = [
  { id: 1, name: "Helping Hands NGO", location: "Mumbai", distance: 2, rating: 4.8 },
  { id: 2, name: "Hope Foundation", location: "Mumbai", distance: 5, rating: 4.2 },
  { id: 3, name: "Food For All", location: "Mumbai", distance: 1, rating: 4.9 },
];

const ProviderList = () => {
  const [selectedNgo, setSelectedNgo] = useState(null);

  const user = {
    name: "Hotel Taj",
  };

  const bestNgo = [...ngoList]
    .sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating;
      return a.distance - b.distance;
    })[0];

  const handleAcceptNgo = () => {
    setSelectedNgo(bestNgo);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header user={user} />

      <div className="flex flex-1 bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-green-800 text-white p-6 flex flex-col space-y-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-8 text-black">Provider Panel</h2>
          <nav className="flex flex-col gap-4 rounded-lg border border-gray-300 p-4">
            <a href="#" className="rounded-lg px-4 py-2 hover:bg-gray-300 hover:text-gray-800 transition duration-200 ease-in-out">Dashboard</a>
            <a href="#" className="rounded-lg px-4 py-2 hover:bg-gray-300 hover:text-gray-800 transition duration-200 ease-in-out">NGO Requests</a>
            <a href="#" className="rounded-lg px-4 py-2 hover:bg-gray-300 hover:text-gray-800 transition duration-200 ease-in-out">Track History</a>
            <a href="#" className="rounded-lg px-4 py-2 hover:bg-gray-300 hover:text-gray-800 transition duration-200 ease-in-out">Profile</a>
            <a href="#" className="rounded-lg px-4 py-2 hover:bg-gray-300 hover:text-gray-800 transition duration-200 ease-in-out">Settings</a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 space-y-10">
          {/* NGO Requests */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-6">NGO Requests for Donations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ngoList.map((ngo) => (
                <div key={ngo.id} className="bg-gray-50 p-4 rounded-xl border-t-4 border-green-500 shadow">
                  <h3 className="text-lg font-semibold">{ngo.name}</h3>
                  <p className="text-gray-600 text-sm">Location: {ngo.location}</p>
                  <p className="text-gray-600 text-sm">Distance: {ngo.distance} km</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-semibold">{ngo.rating}</span>
                  </div>
                </div>
              ))}
            </div>

            {!selectedNgo && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleAcceptNgo}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg"
                >
                  Accept Best NGO
                </button>
              </div>
            )}
          </div>

          {/* Track Order - Shown when NGO is selected */}
          {selectedNgo && (
            <div className="space-y-10">
              {/* Provider Tracking Section */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-green-800 mb-6">Provider - Track Order</h2>
                
                <div className="bg-gray-50 p-4 rounded-xl border-t-4 border-green-500 shadow flex flex-col space-y-3">
                  <p><span className="font-semibold">Provider Name:</span> {user.name}</p>
                  <p><span className="font-semibold">Delivering to NGO:</span> {selectedNgo.name}</p>
                  <p><span className="font-semibold">NGO Location:</span> {selectedNgo.location}</p>

                  <div className="h-64 w-full bg-green-100 rounded-xl flex items-center justify-center mt-4 text-gray-600">
                    🛻 Tracking delivery to NGO...
                  </div>
                </div>
              </div>

              {/* Distributor Tracking Section */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-green-800 mb-6">Distributor - Track Order</h2>
                
                <div className="bg-gray-50 p-4 rounded-xl border-t-4 border-green-500 shadow flex flex-col space-y-3">
                  <p><span className="font-semibold">NGO Name:</span> {selectedNgo.name}</p>
                  <p><span className="font-semibold">Waiting for delivery from:</span> {user.name}</p>

                  <div className="h-64 w-full bg-green-100 rounded-xl flex items-center justify-center mt-4 text-gray-600">
                    📦 Waiting for donation to arrive...
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer user={user} />
    </div>
  );
};

export default ProviderList;
