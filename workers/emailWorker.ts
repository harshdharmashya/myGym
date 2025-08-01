import { Worker, Job } from 'bullmq';
import { connection } from '@/lib/redis';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!,
  },
});

const sendResetEmail = async (to: string, token: string) => {
  const resetLink = `http://localhost:3000/reset-password/${token}`;
  await transporter.sendMail({
    from: `"myGym Support" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Reset Your Password',
    html: `<div>
      <div>
        <h1>Password Reset Request</h1>
      </div>
      <div>
        <p>Hi,</p>
        <p>We received a request to reset your password.</p>
        <p>
          Click the button below to reset your password:
        </p>
        <a href="${resetLink}" class="button">Reset Password</a>
        <p>If you did not request this, please ignore this email.</p>
        <div class="footer">
          <p>Thanks,<br />Your Support Team</p>
        </div>
      </div>
    </div>`,
  });
  console.log(`📨 Reset email sent to ${to}`);
};

const sendLoginAlertEmail = async (to: string, name: string) => {
  await transporter.sendMail({
    from: `"myGym Support" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Login Alert',
    html: `<p>Hello ${name},</p><p>You just logged in to your account. If this wasn't you, please reset your password.</p>`,
  });
  console.log(`📨 Login alert email sent to ${to}`);
};

// Main worker
new Worker(
  'emailQueue',
  async (job: Job) => {
    const { type, to, token, name } = job.data;

    switch (type) {
      case 'reset-password':
        return sendResetEmail(to, token);
      case 'login-alert':
        return sendLoginAlertEmail(to, name);
      default:
        throw new Error('Unknown email job type');
    }
  },
  { connection }
);
