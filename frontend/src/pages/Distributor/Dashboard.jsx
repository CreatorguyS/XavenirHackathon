import React, { useState } from "react";

const trackHistory = {
  providerName: "Hotel Paradise",
  ngoName: "Helping Hands NGO",
  status: "Accepted",
  currentLocation: "Provider Location",
  destination: "NGO Location",
};

const DistributorPanel = () => {
  const [foodListings, setFoodListings] = useState([]);
  const [newListing, setNewListing] = useState({
    name: "",
    type: "Veg",
    serves: 1,
  });

  const handleAddListing = () => {
    if (newListing.name.trim() !== "" && newListing.serves > 0) {
      setFoodListings([...foodListings, { ...newListing, id: Date.now() }]);
      setNewListing({ name: "", type: "Veg", serves: 1 });
    }
  };

  const handleDeleteListing = (id) => {
    setFoodListings(foodListings.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-yellow-100">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-900">Distributor Portal</h1>
        <p className="text-gray-600 text-sm">Welcome, Distributor!</p>
      </header>

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-blue-900 text-white p-6 flex flex-col space-y-6">
          <h2 className="text-2xl font-bold mb-8">Distributor Panel</h2>
          <nav className="flex flex-col gap-4">
            <a href="#" className="hover:text-gray-300">Dashboard</a>
            <a href="#" className="hover:text-gray-300">Past Services</a>
            <a href="#" className="hover:text-gray-300">Track Order</a> {/* NEW */}
            <a href="#" className="hover:text-gray-300">Profile</a>
            <a href="#" className="hover:text-gray-300">Settings</a>
            <a href="#" className="text-red-400 hover:text-red-600 mt-4">Logout</a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 space-y-10">

          {/* Dashboard - Food Listings */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">My Food Listings</h2>

            {/* Add New Listing Form */}
            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Food Name</label>
                <input
                  type="text"
                  value={newListing.name}
                  onChange={(e) => setNewListing({ ...newListing, name: e.target.value })}
                  className="border rounded-lg px-3 py-2 focus:outline-none"
                  placeholder="Enter food name"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Type</label>
                <select
                  value={newListing.type}
                  onChange={(e) => setNewListing({ ...newListing, type: e.target.value })}
                  className="border rounded-lg px-3 py-2 focus:outline-none"
                >
                  <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non-Veg</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">No. of Serves</label>
                <input
                  type="number"
                  min="1"
                  value={newListing.serves}
                  onChange={(e) => setNewListing({ ...newListing, serves: Number(e.target.value) })}
                  className="border rounded-lg px-3 py-2 focus:outline-none"
                />
              </div>

              <button
                onClick={handleAddListing}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Add Listing
              </button>
            </div>

            {/* List of Food */}
            {foodListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foodListings.map((item) => (
                  <div key={item.id} className="bg-gray-50 p-4 rounded-xl border-t-4 border-blue-500 shadow relative">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600 text-sm">Type: {item.type}</p>
                    <p className="text-gray-600 text-sm">Serves: {item.serves}</p>

                    <button
                      onClick={() => handleDeleteListing(item.id)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
                    >
                      ✖
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No listings added yet.</p>
            )}
          </div>

          {/* Track Order */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Track Order</h2>

            <div className="bg-gray-50 p-4 rounded-xl border-t-4 border-blue-500 shadow flex flex-col space-y-3">
              <p><span className="font-semibold">Provider:</span> {trackHistory.providerName}</p>
              <p><span className="font-semibold">NGO:</span> {trackHistory.ngoName}</p>
              <p><span className="font-semibold">Status:</span> {trackHistory.status}</p>

              {/* Map Simulation */}
              <div className="h-64 w-full bg-blue-100 rounded-xl flex items-center justify-center mt-4 text-gray-600">
                🗺️ Map showing movement from Provider to NGO...
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-inner p-4 text-center text-gray-500 text-sm">
        © 2025 Distributor Panel. All rights reserved.
      </footer>
    </div>
  );
};

export default DistributorPanel;
