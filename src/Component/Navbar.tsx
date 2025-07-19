'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';

export default function Navbar() {
    interface User {
        id: string;
        email: string;
        role: string;
      }
    const pathname = usePathname()
    const router = useRouter()

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [user, setUser] = useState<User | null>()
    useEffect(() => {
        const checkLoginStatus = () => {
            try {
                const token = localStorage.getItem('token');
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    const userData = JSON.parse(storedUser);
                    setUser(userData);
                } else {
                    setUser(null);
                }

                if (token) {
                    const decoded: { exp: number } = jwtDecode(token);
                    const isExpired = decoded.exp * 1000 < Date.now();
                    setIsLoggedIn(!isExpired);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (err) {
                console.error('Invalid token:', err);
                setIsLoggedIn(false);
            }
        };

        setMounted(true);
        checkLoginStatus();

        window.addEventListener('storage', checkLoginStatus);
        return () => window.removeEventListener('storage', checkLoginStatus);
    }, []);


    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // 🔥 Trigger storage event to update all listeners
        window.dispatchEvent(new Event('storage'));

        setIsLoggedIn(false);
        router.push('/login');
    };

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Services', href: '/services' },
    ]

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }

    if (!mounted) return null // Avoid hydration error in SSR

    return (
        <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50 bg-black">
            <div className="mx-auto max-w-7xl px-4">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700">
                            <Bars3Icon className="block h-6 w-6" />
                        </DisclosureButton>
                    </div>

                    {/* Logo and nav links */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex items-center text-white font-bold text-xl">MyGym</div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-4 py-2 rounded ${pathname === item.href
                                        ? 'bg-white text-black font-semibold'
                                        : 'text-white'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {!isLoggedIn && (
                                <>
                                    <Link href="/login" className={`px-4 py-2 rounded ${pathname === '/login'
                                        ? 'bg-white text-black font-semibold'
                                        : 'text-white'
                                        }`}>
                                        Login
                                    </Link>
                                    <Link href="/signup" className={`px-4 py-2 rounded ${pathname === '/signup'
                                        ? 'bg-white text-black font-semibold'
                                        : 'text-white'
                                        }`}>
                                        Sign up
                                    </Link>
                                </>
                            )}
                            {isLoggedIn && user && user.role === 'ADMIN' &&  (
                                <Link href="/admin/dashboard"  className={`px-4 py-2 rounded ${pathname === '/admin/dashboard'
                                    ? 'bg-white text-black font-semibold'
                                    : 'text-white'
                                    }`}>Admin Dashboard</Link>
                            )}
                        </div>
                    </div>

                    {/* Profile dropdown if logged in */}
                    {isLoggedIn && (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white">
                                <BellIcon className="h-6 w-6" />
                            </button>

                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none">
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                                            alt=""
                                        />
                                    </MenuButton>
                                </div>
                                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg">
                                    <MenuItem>
                                        <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Your Profile
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Settings
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Sign out
                                        </button>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile menu panel */}
            <DisclosurePanel className="sm:hidden bg-black/90 px-4 pb-3 pt-2">
                {navigation.map((item) => (
                    <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={`block px-4 py-2 rounded ${pathname === item.href ? 'bg-white text-black font-semibold' : 'text-white'
                            }`}
                    >
                        {item.name}
                    </DisclosureButton>
                ))}
                {!isLoggedIn ? (
                    <>
                        <DisclosureButton as="a" href="/login" className="block px-4 py-2 text-white">
                            Login
                        </DisclosureButton>
                        <DisclosureButton as="a" href="/signup" className="block px-4 py-2 text-white">
                            Sign up
                        </DisclosureButton>
                    </>
                ) : (
                    <DisclosureButton onClick={handleLogout} className="block px-4 py-2 text-red-400">
                        Logout
                    </DisclosureButton>
                )}
            </DisclosurePanel>
        </Disclosure>
    )
}
