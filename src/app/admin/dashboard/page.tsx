'use client';
import React, { useEffect, useState } from 'react';

export default function Page() {
  interface User {
    id: string;
    profilePic: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  
  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/user', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.users) {
          setUsers(data.users);
        }
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="p-8 mt-4 h-screen overflow-x-auto">
      <h1 className="text-4xl font-bold text-center mt-10">Admin Dashboard</h1>
      <hr className="w-[150px] h-1 bg-white mx-auto my-[5px] rounded-[20px]" />
      <p className="text-center mt-4 text-lg">
        Welcome to the admin dashboard!
      </p>

      <table className="w-full mt-10 border border-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-left p-4">User ID</th>
            <th className="text-left p-4">Profile Pic</th>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Role</th>
            <th className="text-left p-4">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="border-t border-white">
              <td className="p-4">{user.id}</td>
              <td className="p-4">
                <img src={user.profilePic} alt="Profile" className="w-10 h-10 rounded-full" />
              </td>
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.role}</td>
              <td className="p-4">{new Date(user.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
