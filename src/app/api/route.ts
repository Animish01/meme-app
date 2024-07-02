import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try{
    const imageUrls = await sql`SELECT url FROM memes`;
    return NextResponse.json(imageUrls.rows);
  } catch (e) {
    console.log(e);
    return NextResponse.json({status: 'couldn\'t find images'});
  }
}