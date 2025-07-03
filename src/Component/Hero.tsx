import React from 'react'

export default function Hero() {
  return (
    <>
      <div className="text-white py-20 h-screen bg-cover bg-center bg-no-repeat bg-[url('https://i.pinimg.com/736x/34/18/60/341860b14a97fee2f9ea91648ea40611.jpg')]">
        <div className="container mx-auto text-center mt-40 lg:mt-9 grid place-content-center bg-black/30 p-8">
          <h1 className="text-4xl lg:text-8xl font-bold mb-4">Welcome to MyGym</h1>
          <hr className='underLine w-55 lg:w-sm h-1 bg-white my-[5px] mx-auto rounded-[20px]' />
          <p className="text-2xl mb-8">Your fitness journey starts here</p>
          <a href="/services" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Explore Services
          </a>
        </div>
      </div>
    </>
  )
}
