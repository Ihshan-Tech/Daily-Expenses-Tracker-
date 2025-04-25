"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", amount: 1150.25 },
  { month: "Feb", amount: 980.25 },
  { month: "Mar", amount: 1295.75 },
  { month: "Apr", amount: 1245.3 },
  { month: "May", amount: 1180.5 },
  { month: "Jun", amount: 1320.45 },
  { month: "Jul", amount: 1450.2 },
  { month: "Aug", amount: 1380.75 },
  { month: "Sep", amount: 1275.3 },
  { month: "Oct", amount: 1420.5 },
  { month: "Nov", amount: 1670.25 },
  { month: "Dec", amount: 1850.45 },
]

export function YearlySpendingChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value}`, "Amount"]} labelFormatter={(label) => `${label} 2025`} />
          <Area type="monotone" dataKey="amount" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
