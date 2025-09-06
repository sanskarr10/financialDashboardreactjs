import { NextResponse } from 'next/server';

type ClientPoint = {
  name: string;
  x: number;
  y: number;
  z: number;
};

function gen(range: number): ClientPoint[] {
  const points = 10;
  return Array.from({ length: points }).map((_, i) => ({
    name: `Client ${i + 1}`,
    x: Math.round(10 + Math.random() * 90),
    y: Math.round(10 + Math.random() * 90),
    z: Math.round(5 + Math.random() * 30),
  }));
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const range = Number(searchParams.get('range') || '30');
  return NextResponse.json(gen(range));
}
