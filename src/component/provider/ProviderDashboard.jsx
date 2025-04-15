import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const ProviderDashboard = () => {

     const [stats, setStats] = useState({});

      const fetchDashboardStats = async () => {
        try {
            const providerId=localStorage.getItem("id")
            console.log(providerId)
          const response = await axios.get(`/book/totalbooking/${providerId}`);
          setStats(response.data.data);
          console.log(response)
        } catch (error) {
          console.error('Failed to fetch dashboard data', error);
        }
    
      }

    useEffect(() => {
    fetchDashboardStats()
    }, [])
    

  return (
    <div className='text-center pt-3'>
     <h1 className="text-3xl font-bold mb-4 text-center">Provider Dashboard</h1>   
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
     <div className="p-4 bg-green-100 rounded shadow hover:scale-105 transition-transform duration-300">
          <p className="text-gray-600 font-bold text-2xl">Total Bookings</p>
          <h2 className="text-xl font-bold">{stats.totalbooking}</h2>
        </div>
        <div className="p-4 bg-purple-100 rounded shadow hover:scale-105 transition-transform duration-300">
          <p className="text-gray-600 font-bold text-2xl">Total inquiry</p>
          <h2 className="text-xl font-bold">{stats.totalinquiry}</h2>
        </div>
    </div>
    </div>
  )
}
