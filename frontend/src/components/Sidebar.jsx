import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-60 bg-white shadow-lg h-screen p-4">
      <ul className="space-y-4">
        <li><Link to="/dashboard" className="text-green-600 font-semibold">Dashboard</Link></li>
        <li><Link to="/create-donation" className="text-green-600 font-semibold">Create Donation</Link></li>
        <li><Link to="/select-ngo" className="text-green-600 font-semibold">Select NGO</Link></li>
        <li><Link to="/map" className="text-green-600 font-semibold">View Map</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
