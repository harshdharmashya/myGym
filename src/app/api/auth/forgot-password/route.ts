// app/api/auth/forgot-password/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

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

    const resetLink = `http://localhost:3000/reset-password?token=${token}`;

    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',         // Hostinger SMTP server
        port: 465,                          // Use 465 for SSL
        secure: true,                       // True for port 465
        auth: {
            user: process.env.EMAIL_USER!,  // Example: 'test@yourdomain.com'
            pass: process.env.EMAIL_PASS!,
        }
    });
    console.log("transporter", transporter);
    try {
        await transporter.sendMail({
            from: `"myGym Support" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Reset Your Password',
            html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
        });

        return NextResponse.json({ message: `Reset link sent on email ${email}` });

    } catch (error: any) {
        console.error('❌ Email sending failed:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: `Reset link sent on email ${email}` });
}
