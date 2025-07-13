'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || 'Login failed! Please try again.');
        return;
      }

      // Save login info to localStorage
      localStorage.setItem('token', 'loggedin'); // You can use JWT token here if implemented
      localStorage.setItem('user', JSON.stringify(data.user));

      window.dispatchEvent(new Event('storage'));

      toast.success('Login successful!');
      router.push('/');
    } catch (err: any) {
      toast.error('Login failed!');
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full text-white py-2 rounded transition ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-800'
            }`}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="text-center mt-3">
          <a
            href="/forgotpassword"
            className="text-blue-600 hover:underline text-sm"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}
