'use client';
import React from 'react';

type Props = {
  aum: { value: number; mom: number };
  sip: { value: number; mom: number };
  onAumReport?: () => void;
  onSipReport?: () => void;
};

function formatCurrency(n: number) {
  return n.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
}

export default function AumSipCards({ aum, sip, onAumReport, onSipReport }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[{label:'AUM', data: aum, onClick: onAumReport}, {label:'SIP', data: sip, onClick: onSipReport}].map(({label, data, onClick}) => (
        <div key={label} className="card p-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">{label}</div>
            <div className="text-3xl font-bold mt-1">{formatCurrency(data.value)}</div>
            <div className={`text-sm mt-1 ${data.mom >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {data.mom >= 0 ? '▲' : '▼'} {Math.abs(data.mom).toFixed(1)}% MoM
            </div>
          </div>
          <button className="btn btn-primary rounded-xl" onClick={onClick}>View Report</button>
        </div>
      ))}
    </div>
  );
}
