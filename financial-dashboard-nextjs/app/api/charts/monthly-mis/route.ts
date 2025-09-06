import { NextResponse } from 'next/server';

type MonthlyRow = {
  month: string;
  purchases: number;
  redemptions: number;
  sip: number;
};

function gen(range: number): MonthlyRow[] {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const count = Math.min(Math.ceil(range / 3) + 3, months.length);

  return months.slice(0, count).map((m, i) => ({
    month: m,
    purchases: Math.round(50 + i * 8 + Math.random() * 20),
    redemptions: Math.round(30 + i * 6 + Math.random() * 15),
    sip: Math.round(40 + i * 7 + Math.random() * 18),
  }));
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const range = Number(searchParams.get('range') || '30');
  return NextResponse.json(gen(range));
}
