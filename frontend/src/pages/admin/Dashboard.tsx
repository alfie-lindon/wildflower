import { FaUsers } from "react-icons/fa";
import { LuCircleDollarSign, LuShoppingBasket, LuAlignVerticalDistributeCenter  } from "react-icons/lu";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border-gray-300 shadow p-5">
          <div className="flex items-center gap-2 text-gray-500">
            <FaUsers />
            <p>Total Customers</p>
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
            <LuAlignVerticalDistributeCenter />
            <p>Total Returns</p>
          </div>
          <h1 className="text-2xl font-bold text-primaryText">567,899</h1>
        </div>
      </div>
    </>
  )
}

export default Dashboard