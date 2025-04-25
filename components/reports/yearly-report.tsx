"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, TrendingDown, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { YearlySpendingChart } from "@/components/reports/charts/yearly-spending-chart"
import { YearlyCategoryChart } from "@/components/reports/charts/yearly-category-chart"
import { YearlyComparisonChart } from "@/components/reports/charts/yearly-comparison-chart"
import { MonthlyBreakdownTable } from "@/components/reports/tables/monthly-breakdown-table"

// Mock data for the current year
const currentYearData = {
  year: "2025",
  totalSpent: 14520.75,
  previousYearSpent: 15250.3,
  percentChange: -4.8,
  monthlyAverage: 1210.06,
  highestMonth: {
    month: "December",
    amount: 1850.45,
  },
  lowestMonth: {
    month: "February",
    amount: 980.25,
  },
  topCategory: {
    name: "Bills",
    amount: 5250.75,
    percentage: 36.2,
  },
}

export function YearlyReport() {
  const [currentYear, setCurrentYear] = useState(currentYearData)

  const handlePreviousYear = () => {
    // In a real app, this would fetch data for the previous year
    setCurrentYear({
      ...currentYear,
      year: "2024",
      totalSpent: 15250.3,
      previousYearSpent: 14800.5,
      percentChange: 3.0,
    })
  }

  const handleNextYear = () => {
    // In a real app, this would fetch data for the next year
    setCurrentYear({
      ...currentYear,
      year: "2026",
      totalSpent: 13980.45,
      previousYearSpent: 14520.75,
      percentChange: -3.7,
    })
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Yearly Report</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handlePreviousYear}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous Year
          </Button>
          <Button variant="outline" size="sm" onClick={handleNextYear}>
            Next Year
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold">{currentYear.year}</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentYear.totalSpent.toFixed(2)}</div>
            <div className="mt-1 flex items-center text-xs">
              {currentYear.percentChange < 0 ? (
                <>
                  <TrendingDown className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">{Math.abs(currentYear.percentChange)}% less than previous year</span>
                </>
              ) : (
                <>
                  <TrendingUp className="mr-1 h-4 w-4 text-red-500" />
                  <span className="text-red-500">{currentYear.percentChange}% more than previous year</span>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentYear.monthlyAverage.toFixed(2)}</div>
            <div className="mt-1 text-xs text-muted-foreground">Per month this year</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Highest Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentYear.highestMonth.amount.toFixed(2)}</div>
            <div className="mt-1 text-xs text-muted-foreground">{currentYear.highestMonth.month}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Top Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentYear.topCategory.name}</div>
            <div className="mt-1 text-xs text-muted-foreground">
              ${currentYear.topCategory.amount.toFixed(2)} ({currentYear.topCategory.percentage}%)
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Spending</CardTitle>
            <CardDescription>Your spending pattern throughout the year</CardDescription>
          </CardHeader>
          <CardContent>
            <YearlySpendingChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
            <CardDescription>How your spending is distributed</CardDescription>
          </CardHeader>
          <CardContent>
            <YearlyCategoryChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Year-to-Year Comparison</CardTitle>
          <CardDescription>Compare your spending with previous years</CardDescription>
        </CardHeader>
        <CardContent>
          <YearlyComparisonChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Breakdown</CardTitle>
          <CardDescription>Detailed view of your monthly expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <MonthlyBreakdownTable />
        </CardContent>
      </Card>
    </div>
  )
}
