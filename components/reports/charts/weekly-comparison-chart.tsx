"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { day: "Mon", current: 45.25, previous: 38.5 },
  { day: "Tue", current: 12.5, previous: 25.75 },
  { day: "Wed", current: 35.75, previous: 30.2 },
  { day: "Thu", current: 65.3, previous: 55.45 },
  { day: "Fri", current: 42.8, previous: 48.3 },
  { day: "Sat", current: 85.32, previous: 70.5 },
  { day: "Sun", current: 31.83, previous: 26.5 },
]

export function WeeklyComparisonChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value}`, ""]} />
          <Legend />
          <Bar dataKey="current" name="Current Week" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
          <Bar dataKey="previous" name="Previous Week" fill="#94a3b8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
