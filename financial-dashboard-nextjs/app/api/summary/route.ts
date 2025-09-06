import { NextResponse } from 'next/server';

function dataForRange(range: number) {
  const base = 50000000;
  const mult = range / 30;
  return {
    aum: { value: Math.round(base * (1 + mult * 0.1)), mom: +(2.3 * mult).toFixed(2) },
    sip: { value: Math.round(1500000 * (1 + mult * 0.2)), mom: +(1.7 * mult).toFixed(2) },
    stats: {
      purchases: Math.round(800 * mult + 1200),
      redemptions: Math.round(600 * mult + 850),
      rejected: Math.round(25 * mult + 40),
      sipRejections: Math.round(18 * mult + 25),
      newSip: Math.round(300 * mult + 450)
    }
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const range = Number(searchParams.get('range') || '30');
  return NextResponse.json(dataForRange(range));
}
