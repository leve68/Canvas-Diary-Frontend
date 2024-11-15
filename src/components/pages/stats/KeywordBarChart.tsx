import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  value: {
    label: "등장 횟수",
    color: "#6424A5",
  },
} satisfies ChartConfig;

interface EmotionBarChartProps {
  chartData: { name: string; value: number }[];
}

const KeywordBarChart = ({ chartData }: EmotionBarChartProps) => {
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-80 w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis hide={true} domain={[0, (dataMax: string) => parseInt(dataMax) + 1]} />
            <ChartTooltip content={<ChartTooltipContent />} trigger="click" />
            <Bar
              dataKey="value"
              fill="var(--color-value)"
              radius={20}
              barSize={20}
              label={{ position: "top", fill: "var(--color-value)", fontSize: 12 }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default KeywordBarChart;