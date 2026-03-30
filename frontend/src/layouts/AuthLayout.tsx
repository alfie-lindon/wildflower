import { Outlet, useLocation } from 'react-router-dom'
import AuthNavBar from '../components/navbar/AuthNavBar'
import UserFooter from '../components/footer/UserFooter'

const AuthLayout = () => {
  const location = useLocation()

  const getTitle = () => {
  if (location.pathname.includes("login")) return "Login"
  if (location.pathname.includes("signup")) return "Sign Up"
  return "Reset Password"
}
  return (
    <div className="flex flex-col min-h-screen">
      <AuthNavBar />
        <div className="flex min-h-screen items-center justify-center">
          <div className="bg-white pt-0 pb-0 p-10 rounded-2xl shadow-md">
            <div className="mt-5 pb-6 text-center">
              <p className="text-[30px] font-lora font-bold text-primaryText">
                {getTitle()}
              </p>
            </div>

            <Outlet />

          </div>
        </div>
      <UserFooter />
    </div>
  )
}

export default AuthLayout