import React from 'react'

export default function Hero() {
  return (
    <>
      <div className="text-white py-20 heroSection">
        <div className="container mx-auto text-center mt-9">
          <h1 className="text-8xl font-bold mb-4">Welcome to MyGym</h1>
          <hr className='underLine' />
          <p className="text-2xl mb-8">Your fitness journey starts here</p>
          <a href="/services" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Explore Services
          </a>
        </div>
      </div>
    </>
  )
}
