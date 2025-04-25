"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExpenseList } from "@/components/expense-list"
import { ExpenseFilters } from "@/components/expense-filters"
import { getExpenses, type Expense } from "@/lib/expenses"

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  // Load expenses from local storage
  useEffect(() => {
    setExpenses(getExpenses())
  }, [])

  // Filter expenses based on search query
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-semibold">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4" />
            </Button>
            <Button asChild>
              <Link href="/add-expense">
                <Plus className="mr-2 h-4 w-4" />
                Add Expense
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Expenses</h1>
              <p className="text-muted-foreground">View and manage all your expenses.</p>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search expenses..."
                className="w-full bg-background pl-8 md:w-[240px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>
        <section className="container py-4">
          <div className="grid gap-6 md:grid-cols-4">
            {showFilters && (
              <div className="md:col-span-1">
                <ExpenseFilters />
              </div>
            )}
            <div className={showFilters ? "md:col-span-3" : "md:col-span-4"}>
              <ExpenseList expenses={filteredExpenses} />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex h-16 items-center text-sm text-muted-foreground">
          <p>© 2025 ExpenseTracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
