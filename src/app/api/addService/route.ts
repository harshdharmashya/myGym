import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
    try {
        const authHeader = req.headers.get('authorization');
        const token = authHeader?.split(' ')[1];

        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
            id: string;
            email: string;
            role: string;
        };

        if (decoded.role !== 'ADMIN') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const body = await req.json();
        const {
            image,
            title,
            paragraph
        } = body;

        if (!title || !image || !paragraph) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const newService = await prisma.service.create({
            data: {
                image,
                title,
                paragraph
            },
        });

        return NextResponse.json({ message: 'Service added successfully', newService }, { status: 201 });
    } catch (error) {
        console.error('Add Service Error:', error);
        return NextResponse.json({ error: 'Server Error' }, { status: 500 });
    }
}
