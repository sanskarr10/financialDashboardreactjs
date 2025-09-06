"use client";
import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ClientPoint {
  name: string;
  x: number;
  y: number;
  z: number;
}

export default function ClientsBubbleChart({ data }: { data: ClientPoint[] }) {
  if (!data || data.length === 0) {
    return <p className="text-gray-400">No client data available</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis dataKey="x" name="Investments" />
        <YAxis dataKey="y" name="Returns" />
        <ZAxis dataKey="z" range={[60, 400]} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter
          name="Clients"
          data={data}
          dataKey="z"
          fill="#8884d8"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
