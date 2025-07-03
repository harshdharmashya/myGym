import React from 'react'

export default function Workouts() {
    return (
        <>
            <div className='p-8'>
                <h1 className="text-4xl font-bold text-center mt-10">Our Workouts</h1>
                                <hr className='w-[150px] h-1 bg-white mx-auto my-[5px] rounded-[20px]'/>

                <p className="text-center text-xl mt-4 mb-10">Explore our diverse range of workouts designed for all fitness levels.</p>
                <div className='workout-splits grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='p-4 text-center mb-5 gap-[20px] h-auto rounded-[10px] w-full border border-[#f0f0f0]'>
                        <div className='w-full h-[240px] rounded-[10px] overflow-hidden transition-all duration-500 ease-in-out hover:scale-105'>
                            <img className='h-full w-full cursor-pointer object-cover' src="https://i.pinimg.com/736x/6f/ce/31/6fce31da8d0762094aa2e8ed1d3ccc6e.jpg" alt="" />
                        </div>
                        <h2 className='font-bold text-xl mt-2'>Full Body</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ut? Vero alias blanditiis cum ut quidem recusandae minima, laudantium inventore!</p>
                    </div>
                    <div className='p-4 text-center mb-5 gap-[20px] h-auto rounded-[10px] w-full border border-[#f0f0f0]'>
                        <div className='w-full h-[240px] rounded-[10px] overflow-hidden transition-all duration-500 ease-in-out hover:scale-105'>
                            <img className='h-full w-full cursor-pointer object-cover' src="https://i.pinimg.com/736x/9e/0b/d7/9e0bd7ab178e89f3a3fb6934c4491550.jpg" alt="" />
                        </div>
                        <h2 className='font-bold text-xl mt-2'>Upper Body</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ut? Vero alias blanditiis cum ut quidem recusandae minima, laudantium inventore!</p>
                    </div>
                    <div className='p-4 text-center mb-5 gap-[20px] h-auto rounded-[10px] w-full border border-[#f0f0f0]'>
                        <div className='w-full h-[240px] rounded-[10px] overflow-hidden transition-all duration-500 ease-in-out hover:scale-105'>
                            <img className='h-full w-full cursor-pointer object-cover' src="https://i.pinimg.com/736x/2e/08/36/2e08365324a0da82cab512b498fffee8.jpg" alt="" />
                        </div>
                        <h2 className='font-bold text-xl mt-2'>Lower Body</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ut? Vero alias blanditiis cum ut quidem recusandae minima, laudantium inventore!</p>
                    </div>
                </div>
            </div>
        </>
    )
}
