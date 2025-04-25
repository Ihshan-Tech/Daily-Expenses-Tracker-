"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { day: "Mon", amount: 45.25 },
  { day: "Tue", amount: 12.5 },
  { day: "Wed", amount: 35.75 },
  { day: "Thu", amount: 65.3 },
  { day: "Fri", amount: 42.8 },
  { day: "Sat", amount: 85.32 },
  { day: "Sun", amount: 31.83 },
]

export function WeeklySpendingChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value}`, "Amount"]} labelFormatter={(label) => `${label}`} />
          <Bar dataKey="amount" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
