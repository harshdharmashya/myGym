// app/api/services/[id]/route.ts
import { NextResponse ,NextRequest} from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  
) {
  const slug = req.nextUrl.pathname.split('/').filter(Boolean); // Extracting the ID from the URL
  console.log('Slug:', slug); // Log the slug to check its structure
const id = slug[slug.length - 1]; // Assuming the last segment is the ID
  if (!id) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const service = await prisma.service.findUnique({
      where: { id: id.toString() },
    });

    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    return NextResponse.json(service, { status: 200 });
  } catch (error) {
    console.error('Error fetching service by ID:', error);
    return NextResponse.json({ error: 'Failed to fetch service' }, { status: 500 });
  }
}
