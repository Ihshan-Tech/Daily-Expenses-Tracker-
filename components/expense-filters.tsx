import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

export function ExpenseFilters() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Date Range</Label>
          <div className="grid grid-cols-2 gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("justify-start text-left font-normal", !true && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {true ? format(new Date(), "PPP") : <span>From date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" initialFocus />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("justify-start text-left font-normal", !true && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {true ? format(new Date(), "PPP") : <span>To date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <Separator />
        <div className="space-y-2">
          <Label>Categories</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="food" />
              <label
                htmlFor="food"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Food
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="transport" />
              <label
                htmlFor="transport"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Transport
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="entertainment" />
              <label
                htmlFor="entertainment"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Entertainment
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="bills" />
              <label
                htmlFor="bills"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Bills
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="shopping" />
              <label
                htmlFor="shopping"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Shopping
              </label>
            </div>
          </div>
        </div>
        <Separator />
        <div className="space-y-2">
          <Label>Amount Range</Label>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="less-than-50" id="less-than-50" />
              <Label htmlFor="less-than-50">Less than $50</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="50-to-100" id="50-to-100" />
              <Label htmlFor="50-to-100">$50 to $100</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="more-than-100" id="more-than-100" />
              <Label htmlFor="more-than-100">More than $100</Label>
            </div>
          </RadioGroup>
        </div>
        <Separator />
        <div className="flex justify-between">
          <Button variant="outline">Reset</Button>
          <Button>Apply Filters</Button>
        </div>
      </CardContent>
    </Card>
  )
}
