import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {

    const { name, email, message } = await req.json();
    
    if (!name || !email || !message) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    
    try {
        const contact = await prisma.contact.create({
        data: {
            name,
            email,
            message,
        },
        });
    
        return NextResponse.json(contact, { status: 201 });
    } catch (error) {
        console.error('Error creating contact:', error);
        return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 });
    }
}