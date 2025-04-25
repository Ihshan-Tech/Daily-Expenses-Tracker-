"use client"
import { Progress } from "@/components/ui/progress"

const months = [
  {
    id: "1",
    name: "January",
    total: 1150.25,
    budget: 2000.0,
    percentage: 57.5,
    categories: [
      { name: "Food", amount: 320.5, color: "bg-green-500" },
      { name: "Transport", amount: 180.25, color: "bg-yellow-500" },
      { name: "Bills", amount: 430.5, color: "bg-red-500" },
      { name: "Entertainment", amount: 120.0, color: "bg-purple-500" },
      { name: "Shopping", amount: 99.0, color: "bg-blue-500" },
    ],
  },
  {
    id: "2",
    name: "February",
    total: 980.25,
    budget: 2000.0,
    percentage: 49.0,
    categories: [
      { name: "Food", amount: 290.75, color: "bg-green-500" },
      { name: "Transport", amount: 150.5, color: "bg-yellow-500" },
      { name: "Bills", amount: 380.0, color: "bg-red-500" },
      { name: "Entertainment", amount: 95.0, color: "bg-purple-500" },
      { name: "Shopping", amount: 64.0, color: "bg-blue-500" },
    ],
  },
  {
    id: "3",
    name: "March",
    total: 1295.75,
    budget: 2000.0,
    percentage: 64.8,
    categories: [
      { name: "Food", amount: 350.25, color: "bg-green-500" },
      { name: "Transport", amount: 190.75, color: "bg-yellow-500" },
      { name: "Bills", amount: 425.3, color: "bg-red-500" },
      { name: "Entertainment", amount: 165.5, color: "bg-purple-500" },
      { name: "Shopping", amount: 164.0, color: "bg-blue-500" },
    ],
  },
  {
    id: "4",
    name: "April",
    total: 1245.3,
    budget: 2000.0,
    percentage: 62.3,
    categories: [
      { name: "Food", amount: 325.45, color: "bg-green-500" },
      { name: "Transport", amount: 175.2, color: "bg-yellow-500" },
      { name: "Bills", amount: 450.25, color: "bg-red-500" },
      { name: "Entertainment", amount: 145.3, color: "bg-purple-500" },
      { name: "Shopping", amount: 149.1, color: "bg-blue-500" },
    ],
  },
]

export function MonthlyBreakdownTable() {
  return (
    <div className="space-y-6">
      {months.map((month) => (
        <div key={month.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{month.name}</h3>
            <div className="text-right">
              <div className="font-medium">${month.total.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">
                of ${month.budget.toFixed(2)} budget ({month.percentage}%)
              </div>
            </div>
          </div>
          <Progress value={month.percentage} className="h-2" />
          <div className="mt-2 grid grid-cols-5 gap-2">
            {month.categories.map((category, index) => (
              <div key={index} className="space-y-1">
                <div className="flex h-2 w-full rounded-full" style={{ backgroundColor: category.color }} />
                <div className="text-xs font-medium">{category.name}</div>
                <div className="text-xs text-muted-foreground">${category.amount.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
