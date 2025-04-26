import React from "react";

const Header = ({ user }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-700">Donation Platform</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome,</span>
        <div className="px-4 py-2 bg-blue-100 rounded-full font-semibold text-blue-800 shadow">
          {user?.name || "Guest"}
        </div>
      </div>
    </header>
  );
};

export default Header;
