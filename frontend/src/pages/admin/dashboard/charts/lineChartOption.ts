import type { EChartsOption } from "echarts";

export const lineChartOption: EChartsOption = {
  title: {
    text: "Weekly Sales",
    left: 20,
    textStyle: { color: "#2C473C", fontSize: 16, fontWeight: "bold" },
  },
  grid: { left: "3%", right: "4%", bottom: "3%", top: "20%", containLabel: true },
  tooltip: {
    trigger: "axis",
    backgroundColor: "#1e1e2e",
    borderColor: "#6366f1",
    textStyle: { color: "#fff" }
  },
  legend: { data: ["Revenue"], top: 18 },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: "Revenue",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      itemStyle: {
        color: "#2C473C"
      }
    }
  ]
}