"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { category: "Airdrop", percentage: 30, fill: "#003f5c" },
  { category: "Liquidity Pool", percentage: 25, fill: "#2f4b7c" },
  { category: "Vault Treasury", percentage: 30, fill: "#665191" },
  { category: "Early Investors", percentage: 10, fill: "#a05195" },
  { category: "Team", percentage: 5, fill: "#d45087" },
  { category: "Marketing", percentage: 5, fill: "#f95d6a" },
  { category: "CEO Listing", percentage: 5, fill: "#ff7c43" },
]

const chartConfig = {
  percentage: {
    label: "Percentage",
  },
  Airdrop: {
    label: "Airdrop",
    color: "#003f5c",
  },
  "Liquidity Pool": {
    label: "Liquidity Pool",
    color: "#2f4b7c",
  },
  "Vault Treasury": {
    label: "Vault Treasury",
    color: "#665191",
  },
  "Early Investors": {
    label: "Early Investors",
    color: "#a05195",
  },
  Team: {
    label: "Team",
    color: "#d45087",
  },
  Marketing: {
    label: "Marketing",
    color: "#f95d6a",
  },
  "CEO Listing": {
    label: "CEO Listing",
    color: "#ff7c43",
  },
} satisfies ChartConfig

export function PieChartComponent() {
  return (
    <div className="my-10">
      <CardHeader className="items-center pb-0">
        <CardTitle>Token Distribution</CardTitle>
        <CardDescription>CiFarm Token Allocation</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="percentage" label nameKey="category" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Total Supply: 1.000.000.000 Tokens
        </div>
        <div className="leading-none text-muted-foreground">
          55% unlocked at TGE (Airdrop + Liquidity Pool)
        </div>
      </CardFooter>
    </div>
  )
}
