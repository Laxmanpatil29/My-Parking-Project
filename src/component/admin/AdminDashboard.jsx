import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalUsers: 0,
    totalParkingSpots: 0,
    totalProviders: 0,
  });

  const fetchDashboardStats = async () => {
    try {
      const response = await axios.get('/admin/totalnumber')
      setStats(response.data.data);
      console.log(stats)
    } catch (error) {
      console.error('Failed to fetch dashboard data', error)
    }

  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        <div className="p-4 bg-green-100 rounded shadow hover:scale-105 transition-transform duration-300">
          <p className="text-gray-600 font-bold text-2xl">Total Users</p>
          <h2 className="text-xl font-bold">{stats.totalUsers}</h2>
        </div>
        <div className="p-4 bg-purple-100 rounded shadow hover:scale-105 transition-transform duration-300">
          <p className="text-gray-600 font-bold text-2xl">Total Providers</p>
          <h2 className="text-xl font-bold">{stats.totalProviders}</h2>
        </div>
        <div className="p-4 bg-yellow-100 rounded shadow hover:scale-105 transition-transform duration-300">
          <p className="text-gray-600 font-bold text-2xl">Total Parking Spots</p>
          <h2 className="text-xl font-bold">{stats.totalParkingSpots}</h2>
        </div>
        <div className="p-4 bg-blue-100 rounded shadow hover:scale-105 transition-transform duration-300">
          <p className="text-gray-600 font-bold text-2xl">Total Bookings</p>
          <h2 className="text-xl font-bold">{stats.totalBookings}</h2>
        </div>
      </div>
    </div>

  )
}
