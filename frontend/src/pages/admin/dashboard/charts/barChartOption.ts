import type { EChartsOption } from "echarts";

export const barChartOption: EChartsOption = {
  title: {
    text: "Top Selling Products",
    left: 20,
    textStyle: { 
      color: "#2C473C", 
      fontSize: 16, 
      fontWeight: "bold" 
    },
  },
  grid: { 
    left: "3%", 
    right: "4%", 
    bottom: "3%", 
    top: "20%", 
    containLabel: true 
  },
  tooltip: {
    trigger: "axis",
    backgroundColor: "#1e1e2e",
    borderColor: "#6366f1",
    textStyle: { color: "#fff" }
  },
  legend: { 
    data: ["Products"], 
    top: 18 
  },
  xAxis: { 
    type: "category", 
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] 
  },
  yAxis: { 
    type: "value" 
  },
  series: [{
    name: "Products",
    data: [120, 200, 150, 80, 70, 110, 130],
    type: "bar",
    barWidth: "50%",
    itemStyle: { 
      borderRadius: [6, 6, 0, 0], 
      color: "#2C473C" 
    }
  }],
}