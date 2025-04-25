"use client"

import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "Apr 1", amount: 45.25 },
  { date: "Apr 5", amount: 65.3 },
  { date: "Apr 10", amount: 85.32 },
  { date: "Apr 15", amount: 120.45 },
  { date: "Apr 20", amount: 75.2 },
  { date: "Apr 25", amount: 95.5 },
  { date: "Apr 30", amount: 42.8 },
]

export function MonthlySpendingChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value}`, "Amount"]} labelFormatter={(label) => `${label}`} />
          <Line type="monotone" dataKey="amount" stroke="#0ea5e9" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
