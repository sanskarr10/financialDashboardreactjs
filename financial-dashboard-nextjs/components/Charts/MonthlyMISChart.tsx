"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface MonthlyRow {
  month: string;
  purchases: number;
  redemptions: number;
  sip: number;
}

export default function MonthlyMISChart({ data }: { data: MonthlyRow[] }) {
  if (!data || data.length === 0) {
    return <p className="text-gray-400">No MIS data available</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="purchases"
          stroke="#82ca9d"
          dot={false}
          name="Purchases"
        />
        <Line
          type="monotone"
          dataKey="redemptions"
          stroke="#ff7300"
          dot={false}
          name="Redemptions"
        />
        <Line
          type="monotone"
          dataKey="sip"
          stroke="#8884d8"
          dot={false}
          name="SIP"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
