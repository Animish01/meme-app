import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req:NextApiRequest, res:NextApiResponse) {
  try{
    const filePath = __dirname.split('.next')[0];
    const tmp = fs.readdirSync(filePath+'/images');
    return NextResponse.json(tmp)
  } catch (e) {
    console.log(e);
    return NextResponse.json({status: 'couldn\'t find images'});
  }
}