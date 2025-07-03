import React from 'react'
import Link from 'next/link';
export default function page() {
  const services = [
    {
      "id": 1,
      "image": "https://i.pinimg.com/736x/6f/ce/31/6fce31da8d0762094aa2e8ed1d3ccc6e.jpg",
      "title": "Personal Training",
      "paragraph": "Get one-on-one coaching with certified trainers who create custom fitness plans based on your goals, body type, and lifestyle."
    },
    {
      "id": 2,
      "image": "https://i.pinimg.com/736x/9e/0b/d7/9e0bd7ab178e89f3a3fb6934c4491550.jpg",
      "title": "Group Fitness Classes",
      "paragraph": "Enjoy energetic group sessions including HIIT, Zumba, yoga, and strength training to keep you motivated and on track."
    },
    {
      "id": 3,
      "image": "https://i.pinimg.com/736x/2e/08/36/2e08365324a0da82cab512b498fffee8.jpg",
      "title": "Cardio Zone",
      "paragraph": "State-of-the-art treadmills, cycling bikes, and elliptical machines to help you improve your heart health and endurance."
    },
    {
      "id": 4,
      "image": "https://i.pinimg.com/736x/6f/ce/31/6fce31da8d0762094aa2e8ed1d3ccc6e.jpg",
      "title": "Strength Training",
      "paragraph": "A wide range of weights and resistance machines designed to build muscle, increase strength, and improve overall body tone."
    },
    {
      "id": 5,
      "image": "https://i.pinimg.com/736x/9e/0b/d7/9e0bd7ab178e89f3a3fb6934c4491550.jpg",
      "title": "Nutrition Coaching",
      "paragraph": "Work with expert dietitians to develop healthy eating habits and meal plans tailored to support your fitness goals."
    },
    {
      "id": 6,
      "image": "https://i.pinimg.com/736x/2e/08/36/2e08365324a0da82cab512b498fffee8.jpg",
      "title": "Sauna & Recovery",
      "paragraph": "Relax after your workout with our sauna and recovery zone that helps reduce muscle soreness and boost relaxation."
    }
  ]

  return (
    <>
      <div className='p-8'>
        <h1 className="text-4xl font-bold text-center mt-10">Our Services</h1>
        <hr className='w-[150px] h-1 bg-white mx-auto my-[5px] rounded-[20px]' />

        <p className="text-center text-xl mt-4 mb-10">Explore our diverse range of workouts designed for all fitness levels.</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {services && services.map((value) => (
            <Link href={`/services/${encodeURIComponent(value.id)}`}>
              <div className='p-4 text-center mb-5 gap-[20px] h-auto rounded-[10px] w-full border border-[#f0f0f0] overflow-hidden '>
                <div className='w-full h-[240px] rounded-[10px] overflow-hidden transition-all duration-500 ease-in-out hover:scale-105'>
                  <img className='h-full w-full cursor-pointer object-cover' src={value.image} alt="" />
                </div>
                <h2 className='font-bold text-xl mt-2'>{value.title}</h2>
                <p>{value.paragraph}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
