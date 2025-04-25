"use client"

import { useState } from "react"
import { ShoppingBag, Coffee, Car, Home, Film, MoreHorizontal, Receipt, Trash2, Edit, Eye } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { deleteExpense, type Expense } from "@/lib/expenses"
import { useToast } from "@/components/ui/use-toast"

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
    return `Today, ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
  } else if (date.toDateString() === yesterday.toDateString()) {
    return `Yesterday, ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
  } else {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }
}

interface ExpenseListProps {
  expenses: Expense[]
}

export function ExpenseList({ expenses }: ExpenseListProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [expandedExpense, setExpandedExpense] = useState<string | null>(null)

  // Handle expense deletion
  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      deleteExpense(id)
      toast({
        title: "Expense deleted",
        description: "The expense has been deleted successfully.",
      })
      router.refresh()
    }
  }

  // Handle expense edit
  const handleEdit = (id: string) => {
    // In a real app, this would navigate to an edit page
    toast({
      title: "Edit expense",
      description: "This feature is not implemented yet.",
    })
  }

  // Toggle expense details
  const toggleExpenseDetails = (id: string) => {
    setExpandedExpense(expandedExpense === id ? null : id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        {expenses.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <p className="mb-4 text-muted-foreground">No expenses found</p>
            <Button asChild>
              <a href="/add-expense">Add your first expense</a>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {expenses.map((expense) => {
              const categoryInfo = categoryIcons[expense.category.toLowerCase()] || {
                icon: Receipt,
                color: "bg-gray-100 text-gray-700",
              }
              const IconComponent = categoryInfo.icon

              return (
                <div key={expense.id} className="rounded-lg border">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className={cn("rounded-full p-2", categoryInfo.color)}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{expense.description}</div>
                        <div className="text-sm text-muted-foreground">
                          {expense.category} • {formatDate(expense.date)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {expense.receipt && <Receipt className="h-4 w-4 text-muted-foreground" />}
                      <div className="font-medium">${expense.amount.toFixed(2)}</div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => toggleExpenseDetails(expense.id)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEdit(expense.id)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(expense.id)}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  {/* Expanded details section */}
                  {expandedExpense === expense.id && (
                    <div className="border-t p-4">
                      <div className="grid gap-2 text-sm">
                        {expense.notes && (
                          <div>
                            <span className="font-medium">Notes:</span> {expense.notes}
                          </div>
                        )}
                        {expense.recurring && (
                          <div>
                            <span className="font-medium">Recurring:</span> {expense.frequency}
                          </div>
                        )}
                        <div>
                          <span className="font-medium">Date:</span> {new Date(expense.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
