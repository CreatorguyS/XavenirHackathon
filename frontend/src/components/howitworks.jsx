import React from "react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <h1 className="text-5xl font-bold text-center mb-12">How It Works</h1>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-[#0D1B2A] w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg">
              1
            </div>
            <h2 className="text-2xl font-semibold mb-4">Create a Listing</h2>
            <p className="text-gray-300">
              Fill in item details, upload a picture, and post it for the community to see.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-[#0D1B2A] w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg">
              2
            </div>
            <h2 className="text-2xl font-semibold mb-4">Explore Listings</h2>
            <p className="text-gray-300">
              Browse posted items nearby. Use filters to find exactly what you need easily.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-[#0D1B2A] w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-lg">
              3
            </div>
            <h2 className="text-2xl font-semibold mb-4">Connect & Collect</h2>
            <p className="text-gray-300">
              Contact the lister, arrange pickup or delivery, and enjoy your new find!
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Simple. Fast. Sustainable. 🌿</h2>
          <p className="text-gray-400">
            Start sharing today and be part of the change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
