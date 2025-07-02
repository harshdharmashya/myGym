import React from 'react'
import "@/Static/CSS/index.css";
export default function page() {
  return (
    <>
      <div className='p-8'>
        <h1 className="text-4xl font-bold text-center mt-10">Our Services</h1>
        <hr className='underLine-short' />
        <p className="text-center text-xl mt-4 mb-10">Explore our diverse range of workouts designed for all fitness levels.</p>
        <div className='workout-splits flex justify-between gap-8'>
          <div className='p-4 workout-container text-center'>
            <div className='workout-outer-img'>
              <img className='workout-img' src="https://i.pinimg.com/736x/6f/ce/31/6fce31da8d0762094aa2e8ed1d3ccc6e.jpg" alt="" />
            </div>
            <h2 className='font-bold text-xl mt-2'>Full Body</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ut? Vero alias blanditiis cum ut quidem recusandae minima, laudantium inventore!</p>
          </div>
          <div className='p-4 workout-container text-center'>
            <div className='workout-outer-img'>
              <img className='workout-img' src="https://i.pinimg.com/736x/9e/0b/d7/9e0bd7ab178e89f3a3fb6934c4491550.jpg" alt="" />
            </div>
            <h2 className='font-bold text-xl mt-2'>Upper Body</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ut? Vero alias blanditiis cum ut quidem recusandae minima, laudantium inventore!</p>
          </div>
          <div className='p-4 workout-container text-center'>
            <div className='workout-outer-img'>
              <img className='workout-img' src="https://i.pinimg.com/736x/2e/08/36/2e08365324a0da82cab512b498fffee8.jpg" alt="" />
            </div>
            <h2 className='font-bold text-xl mt-2'>Lower Body</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ut? Vero alias blanditiis cum ut quidem recusandae minima, laudantium inventore!</p>
          </div>
        </div>
      </div>
    </>
  )
}
