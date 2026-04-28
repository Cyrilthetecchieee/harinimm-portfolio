import { NextResponse } from 'next/server';
import redis from '@/lib/redis';

export async function GET() {
  try {
    const views = await redis.incr('portfolio_views');
    return NextResponse.json({ views });
  } catch (error) {
    console.error('Error incrementing views:', error);
    return NextResponse.json({ views: null }, { status: 500 });
  }
}
