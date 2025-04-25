"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, TrendingDown, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WeeklySpendingChart } from "@/components/reports/charts/weekly-spending-chart"
import { WeeklyCategoryChart } from "@/components/reports/charts/weekly-category-chart"
import { WeeklyComparisonChart } from "@/components/reports/charts/weekly-comparison-chart"
import { DailyBreakdownTable } from "@/components/reports/tables/daily-breakdown-table"

// Mock data for the current week
const currentWeekData = {
  startDate: "Apr 1, 2025",
  endDate: "Apr 7, 2025",
  totalSpent: 318.75,
  previousWeekSpent: 295.2,
  percentChange: 8.0,
  dailyAverage: 45.54,
  highestDay: {
    day: "Saturday",
    amount: 85.32,
  },
  lowestDay: {
    day: "Tuesday",
    amount: 12.5,
  },
  topCategory: {
    name: "Food",
    amount: 125.45,
    percentage: 39.4,
  },
}

export function WeeklyReport() {
  const [currentWeek, setCurrentWeek] = useState(currentWeekData)

  const handlePreviousWeek = () => {
    // In a real app, this would fetch data for the previous week
    setCurrentWeek({
      ...currentWeek,
      startDate: "Mar 25, 2025",
      endDate: "Mar 31, 2025",
      totalSpent: 295.2,
      previousWeekSpent: 310.5,
      percentChange: -4.9,
    })
  }

  const handleNextWeek = () => {
    // In a real app, this would fetch data for the next week
    setCurrentWeek({
      ...currentWeek,
      startDate: "Apr 8, 2025",
      endDate: "Apr 14, 2025",
      totalSpent: 342.1,
      previousWeekSpent: 318.75,
      percentChange: 7.3,
    })
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Weekly Report</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handlePreviousWeek}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous Week
          </Button>
          <Button variant="outline" size="sm" onClick={handleNextWeek}>
            Next Week
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold">
          {currentWeek.startDate} - {currentWeek.endDate}
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentWeek.totalSpent.toFixed(2)}</div>
            <div className="mt-1 flex items-center text-xs">
              {currentWeek.percentChange < 0 ? (
                <>
                  <TrendingDown className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">{Math.abs(currentWeek.percentChange)}% less than previous week</span>
                </>
              ) : (
                <>
                  <TrendingUp className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500">{currentWeek.percentChange}% more than previous week</span>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Daily Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentWeek.dailyAverage.toFixed(2)}</div>
            <div className="mt-1 text-xs text-muted-foreground">Per day this week</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Highest Spending Day</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentWeek.highestDay.amount.toFixed(2)}</div>
            <div className="mt-1 text-xs text-muted-foreground">{currentWeek.highestDay.day}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Top Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentWeek.topCategory.name}</div>
            <div className="mt-1 text-xs text-muted-foreground">
              ${currentWeek.topCategory.amount.toFixed(2)} ({currentWeek.topCategory.percentage}%)
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Daily Spending</CardTitle>
            <CardDescription>Your spending pattern throughout the week</CardDescription>
          </CardHeader>
          <CardContent>
            <WeeklySpendingChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
            <CardDescription>How your spending is distributed</CardDescription>
          </CardHeader>
          <CardContent>
            <WeeklyCategoryChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Week-to-Week Comparison</CardTitle>
          <CardDescription>Compare your spending with previous weeks</CardDescription>
        </CardHeader>
        <CardContent>
          <WeeklyComparisonChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daily Breakdown</CardTitle>
          <CardDescription>Detailed view of your daily expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <DailyBreakdownTable />
        </CardContent>
      </Card>
    </div>
  )
}
