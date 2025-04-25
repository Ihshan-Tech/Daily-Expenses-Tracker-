"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, Printer } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WeeklyReport } from "@/components/reports/weekly-report"
import { MonthlyReport } from "@/components/reports/monthly-report"
import { YearlyReport } from "@/components/reports/yearly-report"

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState("weekly")

  const handleExport = () => {
    // In a real app, this would generate a CSV or PDF
    alert("Report exported successfully!")
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background print:hidden">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-semibold">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm" onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Expense Reports</h1>
            <p className="text-muted-foreground">View and analyze your spending patterns.</p>
          </div>

          <Tabs defaultValue="weekly" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="print:hidden">
              <TabsTrigger value="weekly">Weekly Report</TabsTrigger>
              <TabsTrigger value="monthly">Monthly Report</TabsTrigger>
              <TabsTrigger value="yearly">Yearly Report</TabsTrigger>
            </TabsList>

            <TabsContent value="weekly" className="space-y-8">
              <WeeklyReport />
            </TabsContent>

            <TabsContent value="monthly" className="space-y-8">
              <MonthlyReport />
            </TabsContent>

            <TabsContent value="yearly" className="space-y-8">
              <YearlyReport />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t print:hidden">
        <div className="container flex h-16 items-center text-sm text-muted-foreground">
          <p>© 2025 ExpenseTracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
