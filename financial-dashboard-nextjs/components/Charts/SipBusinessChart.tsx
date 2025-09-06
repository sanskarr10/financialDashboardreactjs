"use client";
import React from "react";
import {
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface SipRow {
  month: string;
  amount: number;
  count: number;
}

export default function SipBusinessChart({ data }: { data: SipRow[] }) {
  if (!data || data.length === 0) {
    return <p className="text-gray-400">No SIP data available</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#82ca9d" name="SIP Amount" />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          dot={false}
          name="SIP Count"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
