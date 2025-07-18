'use client'
import React from 'react'
import Link from 'next/link';
import { useEffect,useState } from 'react';
export default function page() {
  interface Service {
    id: string;
    image: string;
    title: string;
    paragraph: string;
  }
  
  const [service, setService] = useState<Service[]>([]);

useEffect(()=>{
  const fetchServices = async()=>{
    try{
      const response = await fetch('/api/services');
      if(response){
        const data = await response.json();
        if(data){
          setService(data)
        }
      }
    }catch(error){
      console.error('Error fetching services:', error);
    }
  }
  fetchServices();
},[])

  return (
    <>
      <div className='p-8'>
        <h1 className="text-4xl font-bold text-center mt-10">Our Services</h1>
        <hr className='w-[150px] h-1 bg-white mx-auto my-[5px] rounded-[20px]' />

        <p className="text-center text-xl mt-4 mb-10">Explore our diverse range of workouts designed for all fitness levels.</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {service && service.map((value) => (
            <Link href={`/services/${value.id}`}  key={value.id}>
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
