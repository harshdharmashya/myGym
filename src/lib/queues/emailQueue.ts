import { Queue } from 'bullmq';
import { connection } from '@/lib/redis';

export const emailQueue = new Queue('emailQueue', { connection });
