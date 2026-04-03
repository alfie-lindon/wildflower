import { Outlet } from "react-router-dom"
import AdminNavBar from "../components/navbar/AdminNavBar"
import AdminSideBar from "../components/navbar/AdminSideBar"

const AdminLayout = () => {
  return (
    <div className="flex h-screen">

      {/* Sidebar — full height, on the left */}
      <AdminSideBar />

      {/* Right side — navbar on top, content below */}
      <div className="flex flex-col flex-1">
        <AdminNavBar />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>

    </div>
  )
}

export default AdminLayout