import React from 'react'
import '@/Static/CSS/index.css'
export default function page() {
    return (
        <>
            <div className='p-8'>
                <h1 className="text-4xl font-bold text-center mt-10">About Us</h1>
                <hr className='w-[150px] h-1 bg-white mx-auto my-[5px] rounded-[20px]'/>
                <p className="text-center mt-4 text-lg">
                    Welcome to our fitness center! We are dedicated to helping you achieve your fitness goals with state-of-the-art facilities and expert guidance.
                </p>
            </div>
            <div className='flex'>
                <div className='h-[400px] w-full overflow-hidden basis-[30%]'><img className='transition-all duration-500 ease-in-out hover:scale-125 w-full h-full object-cover' src="https://i.pinimg.com/736x/ad/5a/36/ad5a36a36574e209196d12f8c1f5f9e6.jpg" alt="" /></div>
                <div className='flex flex-col basis-[40%]'>
                    <div className='h-[200px] w-full overflow-hidden'>
                        <img className='transition-all duration-500 ease-in-out hover:scale-125 w-full h-full object-cover' src="https://i.pinimg.com/736x/e6/dd/3c/e6dd3cd2fd66aa6048526d3d0fd138df.jpg" alt="" />
                    </div>
                    <div className='h-[200px] w-full overflow-hidden'>
                        <img className='transition-all duration-500 ease-in-out hover:scale-125 w-full h-full object-cover' src="https://i.pinimg.com/736x/df/8e/4c/df8e4c19463cb60023581232501dc410.jpg" alt="" />
                    </div>
                </div>
                <div className='h-[400px] w-full overflow-hidden basis-[30%]'><img className='transition-all duration-500 ease-in-out hover:scale-125 w-full h-full object-cover' src="https://i.pinimg.com/736x/39/da/d0/39dad0fb1e7c5f42579763ee328bd0cb.jpg" alt="" /></div>
            </div>
            <div>
                <h2 className='text-3xl font-bold text-center mt-10'>Our Mission</h2>
                                <hr className='w-[150px] h-1 bg-white mx-auto my-[5px] rounded-[20px]'/>

                <p className='text-center mt-4 mb-10 text-lg'>
                    Our mission is to empower individuals to lead healthier lives through personalized fitness programs, nutritional guidance, and a supportive community.
                </p>
            </div>
            <div className='p-8'>
                <div className='flex flex-col xl:flex-row justify-between gap-8 rounded-[10px] bg-black p-[40px] shadow-[5px_10px_15px_#313131]'>
                    <div className='w-full h-[400px] overflow-hidden rounded-[10px] basis-[40%] transition-all duration-500 ease-in-out hover:scale-105'>
                        <img className='h-full w-full cursor-pointer object-cover' src="https://i.pinimg.com/736x/dd/d0/87/ddd0872b311d1be9556c3801f22bdd4f.jpg" alt="" />
                    </div>
                    <div className='basis-[55%]'>
                        <h2 className='text-4xl'>Cardio Area</h2>
                        <hr className='w-[140px] h-[3px] bg-white rounded-[20px] mt-[5px] mr-0 mb-[5px] ml-[50px]'/>
                        <p className='mt-2 text-white p-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam enim ab earum corrupti vel sapiente doloribus minima dolores impedit dolorum consequuntur quos optio aliquid, accusantium perspiciatis nam laborum. Provident totam hic porro, placeat iusto a asperiores dolor accusamus vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis fugit animi illo eum totam hic facere. <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum. Necessitatibus natus ducimus cumque? Reprehenderit hic, non sint officiis voluptatibus nemo cupiditate nostrum enim expedita eos repellendus cum eveniet explicabo!</p>
                    </div>
                </div>
            </div>
        </>
    )
}
