"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, TrendingDown, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MonthlySpendingChart } from "@/components/reports/charts/monthly-spending-chart"
import { MonthlyCategoryChart } from "@/components/reports/charts/monthly-category-chart"
import { MonthlyComparisonChart } from "@/components/reports/charts/monthly-comparison-chart"
import { CategoryBreakdownTable } from "@/components/reports/tables/category-breakdown-table"

// Mock data for the current month
const currentMonthData = {
  month: "April 2025",
  totalSpent: 1245.3,
  previousMonthSpent: 1295.75,
  percentChange: -3.9,
  dailyAverage: 41.51,
  highestDay: {
    day: "April 15",
    amount: 120.45,
  },
  topCategory: {
    name: "Bills",
    amount: 450.25,
    percentage: 36.2,
  },
  budgetStatus: {
    used: 1245.3,
    total: 2000.0,
    percentage: 62.3,
  },
}

export function MonthlyReport() {
  const [currentMonth, setCurrentMonth] = useState(currentMonthData)

  const handlePreviousMonth = () => {
    // In a real app, this would fetch data for the previous month
    setCurrentMonth({
      ...currentMonth,
      month: "March 2025",
      totalSpent: 1295.75,
      previousMonthSpent: 1350.2,
      percentChange: -4.0,
    })
  }

  const handleNextMonth = () => {
    // In a real app, this would fetch data for the next month
    setCurrentMonth({
      ...currentMonth,
      month: "May 2025",
      totalSpent: 1180.5,
      previousMonthSpent: 1245.3,
      percentChange: -5.2,
    })
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Monthly Report</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handlePreviousMonth}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous Month
          </Button>
          <Button variant="outline" size="sm" onClick={handleNextMonth}>
            Next Month
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold">{currentMonth.month}</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentMonth.totalSpent.toFixed(2)}</div>
            <div className="mt-1 flex items-center text-xs">
              {currentMonth.percentChange < 0 ? (
                <>
                  <TrendingDown className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">
                    {Math.abs(currentMonth.percentChange)}% less than previous month
                  </span>
                </>
              ) : (
                <>
                  <TrendingUp className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500">{currentMonth.percentChange}% more than previous month</span>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Budget Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentMonth.budgetStatus.percentage}%</div>
            <div className="mt-1 text-xs text-muted-foreground">
              ${currentMonth.budgetStatus.used.toFixed(2)} of ${currentMonth.budgetStatus.total.toFixed(2)}
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-muted">
              <div
                className="h-2 rounded-full bg-primary"
                style={{ width: `${currentMonth.budgetStatus.percentage}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Daily Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentMonth.dailyAverage.toFixed(2)}</div>
            <div className="mt-1 text-xs text-muted-foreground">Per day this month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Top Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentMonth.topCategory.name}</div>
            <div className="mt-1 text-xs text-muted-foreground">
              ${currentMonth.topCategory.amount.toFixed(2)} ({currentMonth.topCategory.percentage}%)
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Daily Spending</CardTitle>
            <CardDescription>Your spending pattern throughout the month</CardDescription>
          </CardHeader>
          <CardContent>
            <MonthlySpendingChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
            <CardDescription>How your spending is distributed</CardDescription>
          </CardHeader>
          <CardContent>
            <MonthlyCategoryChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Month-to-Month Comparison</CardTitle>
          <CardDescription>Compare your spending with previous months</CardDescription>
        </CardHeader>
        <CardContent>
          <MonthlyComparisonChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Category Breakdown</CardTitle>
          <CardDescription>Detailed view of your spending by category</CardDescription>
        </CardHeader>
        <CardContent>
          <CategoryBreakdownTable />
        </CardContent>
      </Card>
    </div>
  )
}
