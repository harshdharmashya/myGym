// app/api/services/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // await prisma.service.createMany({
    //     data: [
    //       {
    //         image: 'https://example.com/image1.jpg',
    //         title: 'Personal Training',
    //         paragraph: 'One-on-one coaching to meet your specific fitness goals.',
    //       },
    //       {
    //         image: 'https://example.com/image2.jpg',
    //         title: 'Group Classes',
    //         paragraph: 'High-energy group classes for strength, cardio, and flexibility.',
    //       },
    //       {
    //         image: 'https://example.com/image3.jpg',
    //         title: 'Nutrition Plans',
    //         paragraph: 'Custom meal plans designed by certified nutritionists.',
    //       },
    //       {
    //         image: 'https://example.com/image4.jpg',
    //         title: 'Yoga & Meditation',
    //         paragraph: 'Mindfulness sessions to improve flexibility and reduce stress.',
    //       },
    //       {
    //         image: 'https://example.com/image5.jpg',
    //         title: 'Body Composition Analysis',
    //         paragraph: 'Track muscle, fat, and hydration levels with precision tools.',
    //       },
    //     ],
    //   });
    
    //   console.log('✅ Services inserted successfully');
    const services = await prisma.service.findMany();
    

    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}
