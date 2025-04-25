"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, BarChart3, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExpenseSummary } from "@/components/expense-summary"
import { RecentExpenses } from "@/components/recent-expenses"
import { ExpenseChart } from "@/components/expense-chart"
import { getExpenses, getTotalByDateRange } from "@/lib/expenses"

export default function Home() {
  const [todayTotal, setTodayTotal] = useState(0)
  const [weekTotal, setWeekTotal] = useState(0)
  const [monthTotal, setMonthTotal] = useState(0)
  const [recentExpenses, setRecentExpenses] = useState([])

  useEffect(() => {
    // Calculate date ranges
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const endOfDay = new Date(today)
    endOfDay.setHours(23, 59, 59, 999)

    const startOfWeek = new Date(today)
    startOfWeek.setDate(today.getDate() - today.getDay())

    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)

    // Get totals for each time period
    setTodayTotal(getTotalByDateRange(today, endOfDay))
    setWeekTotal(getTotalByDateRange(startOfWeek, endOfDay))
    setMonthTotal(getTotalByDateRange(startOfMonth, endOfDay))

    // Get recent expenses
    setRecentExpenses(getExpenses().slice(0, 5))
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-xl">ExpenseTracker</span>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Track and manage your daily expenses.</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="w-full md:w-auto" asChild>
                <Link href="/add-expense">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Expense
                </Link>
              </Button>
              <Button variant="outline" className="w-full md:w-auto" asChild>
                <Link href="/reports">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Reports
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="container py-4">
          <div className="grid gap-4 md:grid-cols-3">
            <ExpenseSummary title="Today" amount={todayTotal} change={0} />
            <ExpenseSummary title="This Week" amount={weekTotal} change={0} />
            <ExpenseSummary title="This Month" amount={monthTotal} change={0} />
          </div>
        </section>
        <section className="container py-4">
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Your spending by category this month</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpenseChart />
              </CardContent>
            </Card>
            <Card className="md:col-span-3">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Expenses</CardTitle>
                  <CardDescription>Your latest transactions</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <RecentExpenses expenses={recentExpenses} />
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/expenses">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
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
