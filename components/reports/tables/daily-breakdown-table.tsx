"use client"

import { ShoppingBag, Coffee, Car, Film } from "lucide-react"

import { cn } from "@/lib/utils"

const expenses = [
  {
    id: "1",
    day: "Monday",
    date: "Apr 1, 2025",
    total: 45.25,
    items: [
      {
        id: "1-1",
        category: "Food",
        description: "Grocery Store",
        amount: 35.75,
        icon: ShoppingBag,
        color: "bg-blue-100 text-blue-700",
      },
      {
        id: "1-2",
        category: "Food",
        description: "Coffee Shop",
        amount: 4.5,
        icon: Coffee,
        color: "bg-green-100 text-green-700",
      },
      {
        id: "1-3",
        category: "Transport",
        description: "Gas Station",
        amount: 5.0,
        icon: Car,
        color: "bg-yellow-100 text-yellow-700",
      },
    ],
  },
  {
    id: "2",
    day: "Tuesday",
    date: "Apr 2, 2025",
    total: 12.5,
    items: [
      {
        id: "2-1",
        category: "Food",
        description: "Coffee Shop",
        amount: 4.5,
        icon: Coffee,
        color: "bg-green-100 text-green-700",
      },
      {
        id: "2-2",
        category: "Transport",
        description: "Bus Fare",
        amount: 8.0,
        icon: Car,
        color: "bg-yellow-100 text-yellow-700",
      },
    ],
  },
  {
    id: "3",
    day: "Wednesday",
    date: "Apr 3, 2025",
    total: 35.75,
    items: [
      {
        id: "3-1",
        category: "Food",
        description: "Restaurant Lunch",
        amount: 18.75,
        icon: Coffee,
        color: "bg-green-100 text-green-700",
      },
      {
        id: "3-2",
        category: "Entertainment",
        description: "Movie Tickets",
        amount: 17.0,
        icon: Film,
        color: "bg-purple-100 text-purple-700",
      },
    ],
  },
]

export function DailyBreakdownTable() {
  return (
    <div className="space-y-6">
      {expenses.map((day) => (
        <div key={day.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">
              {day.day} <span className="text-muted-foreground">({day.date})</span>
            </h3>
            <div className="font-medium">${day.total.toFixed(2)}</div>
          </div>
          <div className="space-y-2">
            {day.items.map((expense) => (
              <div key={expense.id} className="flex items-center justify-between rounded-lg border p-2">
                <div className="flex items-center gap-3">
                  <div className={cn("rounded-full p-2", expense.color)}>
                    <expense.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">{expense.description}</div>
                    <div className="text-xs text-muted-foreground">{expense.category}</div>
                  </div>
                </div>
                <div className="font-medium">${expense.amount.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
