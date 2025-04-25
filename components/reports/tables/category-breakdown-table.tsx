"use client"

import { ShoppingBag, Coffee, Car, Home, Film } from "lucide-react"

import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

const categories = [
  {
    id: "1",
    name: "Food",
    total: 325.45,
    budget: 500.0,
    percentage: 65.1,
    icon: Coffee,
    color: "bg-green-100 text-green-700",
    items: [
      { description: "Grocery Store", amount: 185.75 },
      { description: "Restaurants", amount: 95.2 },
      { description: "Coffee Shops", amount: 44.5 },
    ],
  },
  {
    id: "2",
    name: "Transport",
    total: 175.2,
    budget: 300.0,
    percentage: 58.4,
    icon: Car,
    color: "bg-yellow-100 text-yellow-700",
    items: [
      { description: "Gas", amount: 120.5 },
      { description: "Public Transit", amount: 35.7 },
      { description: "Ride Sharing", amount: 19.0 },
    ],
  },
  {
    id: "3",
    name: "Bills",
    total: 450.25,
    budget: 800.0,
    percentage: 56.3,
    icon: Home,
    color: "bg-red-100 text-red-700",
    items: [
      { description: "Rent", amount: 250.0 },
      { description: "Electricity", amount: 85.25 },
      { description: "Internet", amount: 65.0 },
      { description: "Phone", amount: 50.0 },
    ],
  },
  {
    id: "4",
    name: "Entertainment",
    total: 145.3,
    budget: 200.0,
    percentage: 72.7,
    icon: Film,
    color: "bg-purple-100 text-purple-700",
    items: [
      { description: "Streaming Services", amount: 45.3 },
      { description: "Movies", amount: 35.0 },
      { description: "Events", amount: 65.0 },
    ],
  },
  {
    id: "5",
    name: "Shopping",
    total: 149.1,
    budget: 200.0,
    percentage: 74.6,
    icon: ShoppingBag,
    color: "bg-blue-100 text-blue-700",
    items: [
      { description: "Clothing", amount: 89.5 },
      { description: "Electronics", amount: 59.6 },
    ],
  },
]

export function CategoryBreakdownTable() {
  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={cn("rounded-full p-2", category.color)}>
                <category.icon className="h-4 w-4" />
              </div>
              <h3 className="font-medium">{category.name}</h3>
            </div>
            <div className="text-right">
              <div className="font-medium">${category.total.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">
                of ${category.budget.toFixed(2)} budget ({category.percentage}%)
              </div>
            </div>
          </div>
          <Progress value={category.percentage} className="h-2" />
          <div className="space-y-1 pt-2">
            {category.items.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="text-muted-foreground">{item.description}</div>
                <div>${item.amount.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
