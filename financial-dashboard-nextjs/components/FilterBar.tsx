'use client';
import React from 'react';

type Props = {
  active: number;
  onChange: (days: number) => void;
};

const options = [3,7,10,30];

export default function FilterBar({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(d => (
        <button
          key={d}
          className={`btn rounded-lg ${active===d ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => onChange(d)}
        >
          {d} Days
        </button>
      ))}
    </div>
  );
}
