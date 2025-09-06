import { NextResponse } from 'next/server';

type SipRow = {
  month: string;
  amount: number;
  count: number;
};

function gen(range: number): SipRow[] {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const count = Math.min(Math.ceil(range / 3) + 3, months.length);

  return months.slice(0, count).map((m, i) => ({
    month: m,
    amount: Math.round((5 + i * 1.3 + Math.random() * 3) * 100000),
    count: Math.round(50 + i * 5 + Math.random() * 20),
  }));
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const range = Number(searchParams.get('range') || '30');
  return NextResponse.json(gen(range));
}
