import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { emailQueue } from '@/lib/queues/emailQueue';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const JWT_SECRET = process.env.JWT_SECRET as string;
  const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

  const token = jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN as `${number}${'h' | 'd' | 'm'}` }
  );
  await emailQueue.add('sendEmail', {
    type: 'login-alert',
    to: user.email,
    name: user.name,
  });
  return NextResponse.json({
    message: 'Login successful',
    token,
    expiresIn: JWT_EXPIRES_IN,
    user: { id: user.id, email: user.email, name: user.name, profilePic: user.profilePic || '' },
  });
}
