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
            html: `<div>
        <h2>Password Reset Request</h2>
        <p>Hi,</p>
        <p>We received a request to reset your password for your <strong>myGym</strong> account.</p>
        <p>If you made this request, click the button below to reset your password. <strong>This link is valid for only 15 minutes.</strong></p>
        <a href="${resetLink}" style="display: inline-block;
          background-color: #007bff;
          color: #fff;
          padding: 12px 20px;
          text-decoration: none;
          border-radius: 6px;
          margin-top: 20px;">Reset Password</a>
        <p>If the button doesn’t work, you can also copy and paste the following URL into your browser:</p>
        <p><a href="${resetLink}">${resetLink}</a></p>
        <p>If you did not request a password reset, please ignore this email or <a href="mailto:test@reeduversity.com">contact support</a>.</p>
        <p>Thanks,<br />The myGym Team</p>
        <div>
          <p>© 2025 myGym. All rights reserved.</p>
        </div>
      </div>`,
        });

        return NextResponse.json({ message: `Reset link sent on email ${email}` });

    } catch (error: any) {
        console.error('❌ Email sending failed:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: `Reset link sent on email ${email}` });
}
