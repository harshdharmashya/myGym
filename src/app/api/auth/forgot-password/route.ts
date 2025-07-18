// app/api/auth/forgot-password/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';
import { emailQueue } from '@/lib/queues/emailQueue';


export async function POST(req: Request) {
    const { email } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expiry = new Date(Date.now() + 1000 * 60 * 15); // 15 mins

    await prisma.user.update({
        where: { email },
        data: {
            resetToken: token,
            resetTokenExpiry: expiry,
        },
    });

    try {
        await emailQueue.add('resetPassword', {
            type: 'reset-password',
            to: user.email,
            token: token,
          });

        return NextResponse.json({ message: `Reset email queued to ${email}` });
    } catch (error) {
        console.error('❌ Failed to queue email job:', error);
        return NextResponse.json({ error: 'Failed to queue email' }, { status: 500 });
    }
    return NextResponse.json({ message: `Reset link sent on email ${email}` });
}
