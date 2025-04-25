// Types for our expense data
export interface Expense {
  id: string
  amount: number
  category: string
  description: string
  date: string
  notes?: string
  receipt?: boolean
  recurring?: boolean
  frequency?: string
}

// Get expenses from local storage
export function getExpenses(): Expense[] {
  if (typeof window === "undefined") return []

  const storedExpenses = localStorage.getItem("expenses")
  if (!storedExpenses) return []

  try {
    return JSON.parse(storedExpenses)
  } catch (error) {
    console.error("Failed to parse expenses from localStorage:", error)
    return []
  }
}

// Save a new expense
export function saveExpense(expense: Omit<Expense, "id">): Expense {
  const expenses = getExpenses()

  const newExpense = {
    ...expense,
    id: Date.now().toString(),
  }

  const updatedExpenses = [newExpense, ...expenses]
  localStorage.setItem("expenses", JSON.stringify(updatedExpenses))

  return newExpense
}

// Delete an expense
export function deleteExpense(id: string): boolean {
  const expenses = getExpenses()
  const updatedExpenses = expenses.filter((expense) => expense.id !== id)

  if (updatedExpenses.length === expenses.length) {
    return false // Nothing was deleted
  }

  localStorage.setItem("expenses", JSON.stringify(updatedExpenses))
  return true
}

// Update an expense
export function updateExpense(id: string, updatedData: Partial<Omit<Expense, "id">>): Expense | null {
  const expenses = getExpenses()
  const expenseIndex = expenses.findIndex((expense) => expense.id === id)

  if (expenseIndex === -1) {
    return null
  }

  const updatedExpense = {
    ...expenses[expenseIndex],
    ...updatedData,
  }

  expenses[expenseIndex] = updatedExpense
  localStorage.setItem("expenses", JSON.stringify(expenses))

  return updatedExpense
}

// Get expenses for a specific date range
export function getExpensesByDateRange(startDate: Date, endDate: Date): Expense[] {
  const expenses = getExpenses()

  return expenses.filter((expense) => {
    const expenseDate = new Date(expense.date)
    return expenseDate >= startDate && expenseDate <= endDate
  })
}

// Get total amount spent in a date range
export function getTotalByDateRange(startDate: Date, endDate: Date): number {
  const expenses = getExpensesByDateRange(startDate, endDate)

  return expenses.reduce((total, expense) => total + expense.amount, 0)
}

// Get expenses grouped by category
export function getExpensesByCategory(): Record<string, number> {
  const expenses = getExpenses()

  return expenses.reduce(
    (acc, expense) => {
      const category = expense.category
      if (!acc[category]) {
        acc[category] = 0
      }
      acc[category] += expense.amount
      return acc
    },
    {} as Record<string, number>,
  )
}
