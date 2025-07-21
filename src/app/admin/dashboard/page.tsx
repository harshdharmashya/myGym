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
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    if (!token) {
      setMessage('You are not authorized.');
      return;
    }

    try {
      const response = await fetch('/api/addService', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, paragraph, image }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Service added successfully!');
        setTitle('');
        setParagraph('');
        setImage('');
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (err) {
      console.error('Error adding service:', err);
      setMessage('Server error');
    }
  };

  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    try {
      const respoService = await fetch('/api/services');
      if (respoService.ok) {
        const data = await respoService.json();
        if (data) {
          setServices(data);
        }
      }
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
    <>
      <div className="p-8 mt-4 h-screen ">
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
            {users && users.map((user, index) => (
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
        <p className="text-gray-500 mt-4">
          Total Users: {users.length}
        </p>
      </div>
      <div className="p-8 mt-4">
        <h1 className="text-4xl font-bold text-center mt-10">Services</h1>
        <hr className="w-[150px] h-1 bg-white mx-auto my-[5px] rounded-[20px]" />
        <p className="text-center mt-4 text-lg">
          Added Services!
        </p>
        <div className='flex justify-evenly'>
          <div>
            <table className="w-full mt-10 border border-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="text-left p-4 text-white">Service img</th>
                  <th className="text-left p-4 text-white">Service Name</th>
                  <th className="text-left p-4 text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  services && services.map((service: any, index: number) => (
                    <tr key={service.id} className="border-t border-white">
                      <td className="p-4 h-[80px] w-[100px] rounded-2xl">
                        <img src={service.image} alt="" className='h-full w-full object-cover' />
                      </td>
                      <td className="p-4">{service.title}</td>
                      <td className="p-4">{service.paragraph}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="text-2xl font-bold mt-10">Add New Service</h2>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Service Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  value={paragraph}
                  onChange={(e) => setParagraph(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Image URL</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Service
              </button>
              {message && <p className="mt-4 text-red-600">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
