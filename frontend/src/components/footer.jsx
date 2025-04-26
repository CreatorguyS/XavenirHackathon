import React from "react";

const Footer = ({ user }) => {
  return (
    <footer className="bg-blue-900 text-white p-4 flex justify-between items-center mt-10">
      <p className="text-sm">© 2025 Donation Platform. All rights reserved.</p>
      <div className="text-sm">
        Logged in as: <span className="font-semibold">{user?.name || "Guest"}</span>
      </div>
    </footer>
  );
};

export default Footer;
