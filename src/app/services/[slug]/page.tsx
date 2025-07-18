'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Service {
  id: number;
  image: string;
  title: string;
  paragraph: string;
}

export default function ServiceDetailPage(){
  const [service, setService] = useState<Service | null>(null);
  const params = useParams();
  console.log('Params:', params.slug); // Log the params to check their structure
  const serviceId = params.slug; // use `id` instead of `slug`
console.log('Service ID:', serviceId);
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`/api/services/${serviceId}`);
        if (response.ok) {
          const data = await response.json();
          setService(data);
          console.log('Service fetched successfully:', data);
        } else {
          console.error('Service not found');
        }
      } catch (error) {
        console.error('Error fetching service:', error);
      }
    };

    if ((serviceId)) fetchService();
  }, [serviceId]);

  if (!service) {
    return <div className="text-center p-8">Loading service...</div>;
  }

  return (
    <div className='p-8'>
      <h1 className="text-4xl font-bold text-center mt-10">{service.title}</h1>
      <hr className='w-[150px] h-1 bg-white mx-auto my-[5px] rounded-[20px]' />

      <div className='p-4 text-center mb-5 rounded-[10px] w-full border border-[#f0f0f0]'>
        <div className='w-full h-[240px] rounded-[10px] overflow-hidden'>
          <img className='h-full w-full object-cover' src={service.image} alt={service.title} />
        </div>
        <p className='mt-4'>{service.paragraph}</p>
      </div>
    </div>
  );
}
