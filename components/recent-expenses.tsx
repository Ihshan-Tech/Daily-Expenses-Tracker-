import { ShoppingBag, Coffee, Car, Home, Film } from "lucide-react"
import type { Expense } from "@/lib/expenses"
import { cn } from "@/lib/utils"

// Map category names to icons and colors
const categoryIcons: Record<string, { icon: any; color: string }> = {
  food: { icon: Coffee, color: "bg-green-100 text-green-700" },
  transport: { icon: Car, color: "bg-yellow-100 text-yellow-700" },
  entertainment: { icon: Film, color: "bg-purple-100 text-purple-700" },
  bills: { icon: Home, color: "bg-red-100 text-red-700" },
  shopping: { icon: ShoppingBag, color: "bg-blue-100 text-blue-700" },
}

// Format date for display
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)

  if (date.toDateString() === now.toDateString()) {
    return "Today"
  } else if (date.toDateString() === yesterday.toDateString()) {
    return "Yesterday"
  } else {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }
}

interface RecentExpensesProps {
  expenses: Expense[]
}

export function RecentExpenses({ expenses }: RecentExpensesProps) {
  // If no expenses, show sample data
  if (!expenses || expenses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-4 text-center">
        <p className="text-muted-foreground">No recent expenses</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {expenses.map((expense) => {
        const categoryInfo = categoryIcons[expense.category.toLowerCase()] || {
          icon: ShoppingBag,
          color: "bg-gray-100 text-gray-700",
        }
        const IconComponent = categoryInfo.icon

        return (
          <div key={expense.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={cn("rounded-full p-2", categoryInfo.color)}>
                <IconComponent className="h-4 w-4" />
              </div>
              <div>
                <div className="font-medium">{expense.description}</div>
                <div className="text-xs text-muted-foreground">
                  {expense.category} • {formatDate(expense.date)}
                </div>
              </div>
            </div>
            <div className="font-medium">${expense.amount.toFixed(2)}</div>
          </div>
        )
      })}
    </div>
  )
}
