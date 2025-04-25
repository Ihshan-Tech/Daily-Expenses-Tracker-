"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { category: "Food", current: 325.45, previous: 350.2 },
  { category: "Transport", current: 175.2, previous: 190.75 },
  { category: "Entertainment", current: 145.3, previous: 165.5 },
  { category: "Bills", current: 450.25, previous: 425.3 },
  { category: "Shopping", current: 149.1, previous: 164.0 },
]

export function MonthlyComparisonChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" />
          <YAxis dataKey="category" type="category" />
          <Tooltip formatter={(value) => [`$${value}`, ""]} />
          <Legend />
          <Bar dataKey="current" name="Current Month" fill="#0ea5e9" radius={[0, 4, 4, 0]} />
          <Bar dataKey="previous" name="Previous Month" fill="#94a3b8" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
