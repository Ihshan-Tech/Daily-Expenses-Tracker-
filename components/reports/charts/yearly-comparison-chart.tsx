"use client"

import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", current: 1150.25, previous: 1250.75 },
  { month: "Feb", current: 980.25, previous: 1050.5 },
  { month: "Mar", current: 1295.75, previous: 1350.2 },
  { month: "Apr", current: 1245.3, previous: 1295.75 },
  { month: "May", current: 1180.5, previous: 1220.3 },
  { month: "Jun", current: 1320.45, previous: 1280.75 },
  { month: "Jul", current: 1450.2, previous: 1380.5 },
  { month: "Aug", current: 1380.75, previous: 1420.25 },
  { month: "Sep", current: 1275.3, previous: 1350.45 },
  { month: "Oct", current: 1420.5, previous: 1480.3 },
  { month: "Nov", current: 1670.25, previous: 1720.5 },
  { month: "Dec", current: 1850.45, previous: 1950.3 },
]

export function YearlyComparisonChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value}`, ""]} />
          <Legend />
          <Line type="monotone" dataKey="current" name="2025" stroke="#0ea5e9" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="previous" name="2024" stroke="#94a3b8" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
