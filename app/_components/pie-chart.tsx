"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./chart"

const chartData = [
  { category: "airdrop", allocation: 30, fill: "var(--color-airdrop)" },
  { category: "liquidity", allocation: 25, fill: "var(--color-liquidity)" },
  { category: "vault", allocation: 30, fill: "var(--color-vault)" },
  { category: "investors", allocation: 10, fill: "var(--color-investors)" },
  { category: "team", allocation: 5, fill: "var(--color-team)" },
  { category: "marketing", allocation: 5, fill: "var(--color-marketing)" },
  { category: "ceo", allocation: 5, fill: "var(--color-ceo)" },
]

const chartConfig = {
  allocation: {
    label: "Allocation",
  },
  airdrop: {
    label: "Airdrop",
    color: "hsl(var(--chart-1))",
  },
  liquidity: {
    label: "Liquidity Pool",
    color: "hsl(var(--chart-2))",
  },
  vault: {
    label: "Vault Treasury",
    color: "hsl(var(--chart-3))",
  },
  investors: {
    label: "Early Investors",
    color: "hsl(var(--chart-4))",
  },
  team: {
    label: "Team",
    color: "hsl(var(--chart-5))",
  },
  marketing: {
    label: "Marketing",
    color: "hsl(var(--chart-6))",
  },
  ceo: {
    label: "CEO Listing",
    color: "hsl(var(--chart-7))",
  },
} satisfies ChartConfig

export function PieChartComponent() {
  return (
    <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex flex-col items-center pb-4">
        <h3 className="text-lg font-semibold">Token Distribution</h3>
        <p className="text-sm text-muted-foreground">Total Supply Allocation</p>
      </div>
      <div className="flex-1 pb-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie 
              data={chartData} 
              dataKey="allocation" 
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            />
          </PieChart>
        </ChartContainer>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Total Supply: 100% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing token distribution across different categories
        </div>
      </div>
    </div>
  )
} 