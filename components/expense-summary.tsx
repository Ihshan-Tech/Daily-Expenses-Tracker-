import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ExpenseSummaryProps {
  title: string
  amount: number
  change: number
}

export function ExpenseSummary({ title, amount, change }: ExpenseSummaryProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${amount.toFixed(2)}</div>
        <div className="mt-1 flex items-center text-xs">
          {change < 0 ? (
            <>
              <ArrowDownIcon className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500">{Math.abs(change)}% less than previous period</span>
            </>
          ) : (
            <>
              <ArrowUpIcon className="mr-1 h-4 w-4 text-red-500" />
              <span className="text-red-500">{change}% more than previous period</span>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
