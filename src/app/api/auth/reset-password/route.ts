import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
    const { token, newPassword } = await req.json();

    if (!token || !newPassword) {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const user = await prisma.user.findFirst({
        where: {
            resetToken: token,
            resetTokenExpiry: {
                gte: new Date(), // check if token is not expired
            },
        },
    });

    if (!user) {
        return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
        where: { id: user.id },
        data: {
            password: hashedPassword,
            resetToken: null,
            resetTokenExpiry: null,
        },
    });

    return NextResponse.json({ message: 'Password has been reset successfully' });
}
