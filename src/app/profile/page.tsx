'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            // Not logged in, redirect to login
            router.push('/login');
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        window.dispatchEvent(new Event('storage'));

        router.push('/login');
    };

    if (!user) return <div className="p-10 text-center">Loading...</div>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
                <img
                    className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
                    src="https://api.dicebear.com/7.x/thumbs/svg?seed=Profile"
                    alt="Profile"
                />
                <h2 className="text-2xl font-bold mb-2 text-black">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <button
                    //   onClick={() => {
                    //     localStorage.removeItem('token');
                    //     localStorage.removeItem('user');
                    //     router.push('/login');
                    //   }}
                    onClick={handleLogout}
                    className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
