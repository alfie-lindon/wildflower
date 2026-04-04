import { FaUsers } from "react-icons/fa";
import { LuCircleDollarSign, LuShoppingBasket } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";

import { useEffect, useRef } from "react"
import * as echarts from 'echarts'
import { barChartOption } from "./charts/barChartOption";
import { lineChartOption } from "./charts/lineChartOption";
import { donutChartOption } from "./charts/donutChartOption";

const Dashboard = () => {
  const lineChartRef = useRef<HTMLDivElement>(null)
  const barChartRef = useRef<HTMLDivElement>(null)
  const donutChartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!lineChartRef.current || !barChartRef.current || !donutChartRef.current) return

    const lineChart = echarts.init(lineChartRef.current)
    const barChart = echarts.init(barChartRef.current)
    const donutChart = echarts.init(donutChartRef.current)

    lineChart.setOption(lineChartOption)
    barChart.setOption(barChartOption)
    donutChart.setOption(donutChartOption)

    // Cleanup on unmount
    return () => {
      lineChart.dispose()
      barChart.dispose()
      donutChart.dispose()
    }
  }, [])

  return (
    <>
      {/* Top cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border-gray-300 shadow p-5">
          <div className="flex items-center gap-2 text-gray-500">
            <FaUsers />
            <p>Active Customers</p>
          </div>
          <h1 className="text-2xl font-bold text-primaryText">567,899</h1>
        </div>

        <div className="bg-white rounded-lg border-gray-300 shadow p-5">
          <div className="flex items-center gap-2 text-gray-500">
            <LuCircleDollarSign />
            <p>Total Revenue</p>
          </div>
          <h1 className="text-2xl font-bold text-primaryText">567,899</h1>
        </div>

        <div className="bg-white rounded-lg border-gray-300 shadow p-5">
          <div className="flex items-center gap-2 text-gray-500">
            <LuShoppingBasket />
            <p>Total Orders</p>
          </div>
          <h1 className="text-2xl font-bold text-primaryText">567,899</h1>
        </div>

        <div className="bg-white rounded-lg border-gray-300 shadow p-5">
          <div className="flex items-center gap-2 text-gray-500">
            <CiDeliveryTruck className="text-xl" />
            <p>Pending Shipments</p>
          </div>
          <h1 className="text-2xl font-bold text-primaryText">567,899</h1>
        </div>
      </div>
      {/* Charts */}
      <div ref={lineChartRef} className="bg-white rounded-lg w-full h-80 border-gray-300 shadow my-4" />
      <div className="grid grid-cols-2 gap-4">
        <div ref={barChartRef} className="bg-white rounded-lg w-full h-80 border-gray-300 shadow" />
        <div ref={donutChartRef} className="bg-white rounded-lg w-full h-80 border-gray-300 shadow" />
      </div>
    </>
  )
}

export default Dashboard