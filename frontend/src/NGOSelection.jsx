// In NgoDashboard.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setListings } from '../src/redux/slices/listingSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NGOSelection = () => {
  const { user } = useSelector((state) => state.auth);
  const listings = useSelector((state) => state.listings.listings);
  const dispatch = useDispatch();
  const [scheduledPickups, setScheduledPickups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listingsRes = await axios.get('/api/listings', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        dispatch(setListings(listingsRes.data));

        const pickupsRes = await axios.get('/api/pickups', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setScheduledPickups(pickupsRes.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleSchedulePickup = async (listingId) => {
    try {
      await axios.post('/api/pickups', { listingId, pickupTime: new Date() }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Pickup scheduled');
    } catch (error) {
      console.error('Failed to schedule pickup:', error);
    }
  };

  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl mb-4">Menu</h2>
        <ul>
          <li><Link to="/ngo/dashboard">Dashboard</Link></li>
          <li><Link to="/ngo/map">Map</Link></li>
          <li><Link to="/ngo/history">History</Link></li>
        </ul>
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-3xl mb-4">Welcome, {user.email}</h1>
        <button className="mb-4 bg-blue-500 text-white p-2 rounded">Add New Listing</button>
        <div>
          <h2 className="text-xl mb-2">Available Listings</h2>
          {listings.map((listing) => (
            <div key={listing._id} className="bg-white p-4 mb-4 rounded shadow-md">
              <p>{listing.foodType} - {listing.quantity} units {listing.isVeg ? '(Veg)' : '(Non-Veg)'}</p>
              <p>Location: {listing.location}</p>
              <p>Pickup: {new Date(listing.pickupTime).toLocaleString()}</p>
              <button onClick={() => handleSchedulePickup(listing._id)} className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600">Schedule Pickup</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NGOSelection;