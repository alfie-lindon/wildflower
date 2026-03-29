import { Outlet } from "react-router-dom"
import UserNavBar from "../components/navbar/UserNavBar"
import UserFooter from "../components/footer/UserFooter"

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <UserNavBar />

      <main>
        <Outlet />
      </main>

      <UserFooter />
    </div>
  )
}

export default UserLayout