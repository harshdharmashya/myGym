'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <div>
        <nav className="bg-white-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold">myGym</div>
            <div>
                <a href="/" className={` px-3 py-2  ${ pathname === '/' ? 'text-light font-semibold' : 'text-gray-300 hover:text-white'
                    }}`}>Home</a>
                <a href="/about" className={` px-3 py-2  ${ pathname === '/about' ? 'text-light font-semibold' : 'text-gray-300 hover:text-white'
                    }}`}>About</a>
                <a href="/contact" className={` px-3 py-2  ${ pathname === '/contact' ? 'text-light font-semibold' : 'text-gray-300 hover:text-white'
                    }}`}>Contact</a>
                <a href="/services" className={` px-3 py-2  ${ pathname === '/services' ? 'text-light font-semibold' : 'text-gray-300 hover:text-white'
                    }}`}>Services</a>
            </div>
            </div>
        </nav>
    </div>
  )
}
