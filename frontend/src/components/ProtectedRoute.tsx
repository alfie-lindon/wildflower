import { useAppSelector } from "../store/hooks"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  const user = useAppSelector(state => state.auth.user)
  // If user got to protected route, else go to home
  return user ? <Outlet /> : <Navigate to="/" replace />
}

export default ProtectedRoute